(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{284:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker"),t("OutboundLink")],1),s._v(" is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. Docker can also be used for defining and running multi-container Docker applications using Docker-Compose tool.")]),s._v(" "),t("p",[s._v("With the help of docker-compose, you can define containers to be build, their configuration, links, volumes, ports etc in a single file and it gets launched by a single command. You can also add multiple servers and services just by adding them to docker-compose configuration file. This configuration file is in "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/YAML",target:"_blank",rel:"noopener noreferrer"}},[s._v("YAML"),t("OutboundLink")],1),s._v(" format.")]),s._v(" "),t("h2",{attrs:{id:"application-data-and-database-volume-persistance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-data-and-database-volume-persistance"}},[s._v("#")]),s._v(" Application Data and Database Volume Persistance")]),s._v(" "),t("p",[s._v("It is recommended to keep your application files and database data volume on the docker host and mount them on the running container, this to ensure that the application and database data persistance even in the case of containers' failure or termination, In this way even if you destroy containers, your data won't get lost unless you remove them forcefully. This compose configuration file mounts the application directory app and database volume dbvolume from host to running docker containers at the time of containers launch.")]),s._v(" "),t("h2",{attrs:{id:"installation-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-setup"}},[s._v("#")]),s._v(" Installation & Setup")]),s._v(" "),t("h3",{attrs:{id:"first-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#first-steps"}},[s._v("#")]),s._v(" First steps")]),s._v(" "),t("p",[s._v("Before you can launch eExam in a docker environment you need to install the latest version of Docker and Docker Compose.")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker"),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker-compose"),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Composer"),t("OutboundLink")],1),s._v("(optional)")]),s._v(" "),t("h3",{attrs:{id:"configure-the-docker-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-docker-container"}},[s._v("#")]),s._v(" Configure the docker container")]),s._v(" "),t("p",[s._v("Once Docker and docker-compose have been installed, we need to create a docker-compose.yml file.\nThe docker-compose.yml configuration file requires following inputs from the user:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For more information: https://laravel.com/docs/sail")]),s._v("\nversion: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\nservices:\n    laravel.test:\n        build:\n            context: ./docker/8.1\n            dockerfile: Dockerfile\n            args:\n                WWWGROUP: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${WWWGROUP}'")]),s._v("\n        image: sail-8.1/app\n        extra_hosts:\n            - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'host.docker.internal:host-gateway'")]),s._v("\n        ports:\n            - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${APP_PORT:-80}:80'")]),s._v("\n            - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${VITE_PORT:-5173}:${VITE_PORT:-5173}'")]),s._v("\n        environment:\n            WWWUSER: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${WWWUSER}'")]),s._v("\n            LARAVEL_SAIL: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            XDEBUG_MODE: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${SAIL_XDEBUG_MODE:-off}'")]),s._v("\n            XDEBUG_CONFIG: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${SAIL_XDEBUG_CONFIG:-client_host=host.docker.internal}'")]),s._v("\n        volumes:\n            - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.:/var/www/html'")]),s._v("\n        networks:\n            - sail\n        depends_on:\n            - mysql\n            - redis\n            - minio\n    mysql:\n        image: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql/mysql-server:8.0'")]),s._v("\n        ports:\n            - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${FORWARD_DB_PORT:-3306}:3306'")]),s._v("\n        environment:\n            MYSQL_ROOT_PASSWORD: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${DB_PASSWORD}'")]),s._v("\n            MYSQL_ROOT_HOST: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%"')]),s._v("\n            MYSQL_DATABASE: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${DB_DATABASE}'")]),s._v("\n            MYSQL_USER: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${DB_USERNAME}'")]),s._v("\n            MYSQL_PASSWORD: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${DB_PASSWORD}'")]),s._v("\n            MYSQL_ALLOW_EMPTY_PASSWORD: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        volumes:\n            - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sail-mysql:/var/lib/mysql'")]),s._v("\n            - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./vendor/laravel/sail/database/mysql/create-testing-database.sh:/docker-entrypoint-initdb.d/10-create-testing-database.sh'")]),s._v("\n        networks:\n            - sail\n        healthcheck:\n            test: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CMD"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysqladmin"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ping"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-p'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DB_PASSWORD}")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            retries: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n            timeout: 5s\n    redis:\n        image: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redis:alpine'")]),s._v("\n        ports:\n            - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${FORWARD_REDIS_PORT:-6379}:6379'")]),s._v("\n        volumes:\n            - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sail-redis:/data'")]),s._v("\n        networks:\n            - sail\n        healthcheck:\n            test: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CMD"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis-cli"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ping"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            retries: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n            timeout: 5s\n    minio:\n        image: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'minio/minio:latest'")]),s._v("\n        ports:\n            - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${FORWARD_MINIO_PORT:-9000}:9000'")]),s._v("\n            - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${FORWARD_MINIO_CONSOLE_PORT:-8900}:8900'")]),s._v("\n        environment:\n            MINIO_ROOT_USER: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sail'")]),s._v("\n            MINIO_ROOT_PASSWORD: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),s._v("\n        volumes:\n            - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sail-minio:/data/minio'")]),s._v("\n        networks:\n            - sail\n        command: minio server /data/minio --console-address "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":8900"')]),s._v("\n        healthcheck:\n            test: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CMD"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"curl"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-f"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:9000/minio/health/live"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            retries: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n            timeout: 5s\nnetworks:\n    sail:\n        driver: bridge\nvolumes:\n    sail-mysql:\n        driver: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n    sail-redis:\n        driver: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n    sail-minio:\n        driver: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-V")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Composer version "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.4")]),s._v(".0 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-08-16 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":10:48\n")])])]),t("blockquote",[t("h3",{attrs:{id:"docker-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-image"}},[s._v("#")]),s._v(" Docker Image")]),s._v(" "),t("p",[s._v("Composer is published as Docker container in a few places, see the list in the "),t("a",{attrs:{href:"https://github.com/composer/docker",target:"_blank",rel:"noopener noreferrer"}},[s._v("composer/docker README"),t("OutboundLink")],1),s._v(".\nExample usage:")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull composer/composer\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(':/app"')]),s._v(" composer/composer "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),t("h2",{attrs:{id:"launching-the-docker-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#launching-the-docker-container"}},[s._v("#")]),s._v(" Launching the docker container")]),s._v(" "),t("p",[s._v("The following command will create a network, launch a webserver and database containers with names apache2 and mysql. It will also create a new app and dbvolume directory inside your current directory and mount it to respective docker containers as mentioned in docker-compose.yml. It binds your host port 80 with the apache2 container port 80 and host port 3306 with mysql container port 3306. If you want to run containers on ports other than 80 and 3306, modify their values in docker-compose.yml file.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("sail up "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n")])])]),t("h2",{attrs:{id:"monitor-your-container-s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monitor-your-container-s"}},[s._v("#")]),s._v(" Monitor your container(s):")]),s._v(" "),t("p",[s._v("Check your running docker containers with the following commands")]),s._v(" "),t("p",[t("code",[s._v("docker ps")]),s._v(" OR "),t("code",[s._v("docker-compose ps")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("CONTAINER ID   IMAGE                    COMMAND                  CREATED       STATUS                 PORTS                                                  NAMES\n0925137cbadf   sail-8.1/app             "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start-container"')]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" hours ago   Up "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" hours             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:80-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:5173-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5173")]),s._v("/tcp, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("/tcp   backend-laravel.test-1\ne7f3ba153a79   mysql/mysql-server:8.0   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/entrypoint.sh mysq…"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" hours ago   Up "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" hours "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("healthy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:3306-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("/tcp, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33060")]),s._v("-33061/tcp                backend-mysql-1\ncb8cfe45e352   minio/minio:latest       "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/bin/docker-ent…"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" hours ago   Up "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" hours "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("healthy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8900-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8900")]),s._v("/tcp, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:9000-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v("/tcp         backend-minio-1\n798383ad9da2   redis:alpine             "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-entrypoint.s…"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" hours ago   Up "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" hours "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("healthy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:6379-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp                                 backend-redis-1\n\n")])])]),t("p",[s._v("Go to "),t("code",[s._v("http://localhost")])])])}),[],!1,null,null,null);t.default=n.exports}}]);