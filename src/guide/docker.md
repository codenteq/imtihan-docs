# Docker

[Docker](https://www.docker.com/) is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. Docker can also be used for defining and running multi-container Docker applications using Docker-Compose tool.

With the help of docker-compose, you can define containers to be build, their configuration, links, volumes, ports etc in a single file and it gets launched by a single command. You can also add multiple servers and services just by adding them to docker-compose configuration file. This configuration file is in [YAML](https://en.wikipedia.org/wiki/YAML) format.

## Application Data and Database Volume Persistance
It is recommended to keep your application files and database data volume on the docker host and mount them on the running container, this to ensure that the application and database data persistance even in the case of containers' failure or termination, In this way even if you destroy containers, your data won't get lost unless you remove them forcefully. This compose configuration file mounts the application directory app and database volume dbvolume from host to running docker containers at the time of containers launch.

## Installation & Setup
### First steps
Before you can launch eExam in a docker environment you need to install the latest version of Docker and Docker Compose.

[Docker](https://docs.docker.com/install/)
[Docker-compose](https://docs.docker.com/compose/install/)
[Composer](https://getcomposer.org/)(optional)
### Configure the docker container
Once Docker and docker-compose have been installed, we need to create a docker-compose.yml file.
The docker-compose.yml configuration file requires following inputs from the user:

```bash
# For more information: https://laravel.com/docs/sail
version: '3'
services:
    laravel.test:
        build:
            context: ./docker/8.1
            dockerfile: Dockerfile
            args:
                WWWGROUP: '${WWWGROUP}'
        image: sail-8.1/app
        extra_hosts:
            - 'host.docker.internal:host-gateway'
        ports:
            - '${APP_PORT:-80}:80'
            - '${VITE_PORT:-5173}:${VITE_PORT:-5173}'
        environment:
            WWWUSER: '${WWWUSER}'
            LARAVEL_SAIL: 1
            XDEBUG_MODE: '${SAIL_XDEBUG_MODE:-off}'
            XDEBUG_CONFIG: '${SAIL_XDEBUG_CONFIG:-client_host=host.docker.internal}'
        volumes:
            - '.:/var/www/html'
        networks:
            - sail
        depends_on:
            - mysql
            - redis
            - minio
    mysql:
        image: 'mysql/mysql-server:8.0'
        ports:
            - '${FORWARD_DB_PORT:-3306}:3306'
        environment:
            MYSQL_ROOT_PASSWORD: '${DB_PASSWORD}'
            MYSQL_ROOT_HOST: "%"
            MYSQL_DATABASE: '${DB_DATABASE}'
            MYSQL_USER: '${DB_USERNAME}'
            MYSQL_PASSWORD: '${DB_PASSWORD}'
            MYSQL_ALLOW_EMPTY_PASSWORD: 1
        volumes:
            - 'sail-mysql:/var/lib/mysql'
            - './vendor/laravel/sail/database/mysql/create-testing-database.sh:/docker-entrypoint-initdb.d/10-create-testing-database.sh'
        networks:
            - sail
        healthcheck:
            test: ["CMD", "mysqladmin", "ping", "-p${DB_PASSWORD}"]
            retries: 3
            timeout: 5s
    redis:
        image: 'redis:alpine'
        ports:
            - '${FORWARD_REDIS_PORT:-6379}:6379'
        volumes:
            - 'sail-redis:/data'
        networks:
            - sail
        healthcheck:
            test: ["CMD", "redis-cli", "ping"]
            retries: 3
            timeout: 5s
    minio:
        image: 'minio/minio:latest'
        ports:
            - '${FORWARD_MINIO_PORT:-9000}:9000'
            - '${FORWARD_MINIO_CONSOLE_PORT:-8900}:8900'
        environment:
            MINIO_ROOT_USER: 'sail'
            MINIO_ROOT_PASSWORD: 'password'
        volumes:
            - 'sail-minio:/data/minio'
        networks:
            - sail
        command: minio server /data/minio --console-address ":8900"
        healthcheck:
            test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
            retries: 3
            timeout: 5s
networks:
    sail:
        driver: bridge
volumes:
    sail-mysql:
        driver: local
    sail-redis:
        driver: local
    sail-minio:
        driver: local
```

```bash
composer -V
```
```bash
Composer version 2.4.0 2022-08-16 16:10:48
```
> ### Docker Image
> Composer is published as Docker container in a few places, see the list in the [composer/docker README](https://github.com/composer/docker).
> Example usage:
```bash
docker pull composer/composer
docker run --rm -it -v "$(pwd):/app" composer/composer install
```

## Launching the docker container
The following command will create a network, launch a webserver and database containers with names apache2 and mysql. It will also create a new app and dbvolume directory inside your current directory and mount it to respective docker containers as mentioned in docker-compose.yml. It binds your host port 80 with the apache2 container port 80 and host port 3306 with mysql container port 3306. If you want to run containers on ports other than 80 and 3306, modify their values in docker-compose.yml file.

```bash
docker-compose up -d
```

```bash
sail up -d
```

## Monitor your container(s):
Check your running docker containers with the following commands

`docker ps` OR `docker-compose ps`
```bash
CONTAINER ID   IMAGE                    COMMAND                  CREATED       STATUS                 PORTS                                                  NAMES
0925137cbadf   sail-8.1/app             "start-container"        4 hours ago   Up 4 hours             0.0.0.0:80->80/tcp, 0.0.0.0:5173->5173/tcp, 8000/tcp   backend-laravel.test-1
e7f3ba153a79   mysql/mysql-server:8.0   "/entrypoint.sh mysq…"   4 hours ago   Up 4 hours (healthy)   0.0.0.0:3306->3306/tcp, 33060-33061/tcp                backend-mysql-1
cb8cfe45e352   minio/minio:latest       "/usr/bin/docker-ent…"   4 hours ago   Up 4 hours (healthy)   0.0.0.0:8900->8900/tcp, 0.0.0.0:9000->9000/tcp         backend-minio-1
798383ad9da2   redis:alpine             "docker-entrypoint.s…"   4 hours ago   Up 4 hours (healthy)   0.0.0.0:6379->6379/tcp                                 backend-redis-1

```
Go to `http://localhost`
