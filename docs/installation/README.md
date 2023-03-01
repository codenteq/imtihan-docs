# Installation

## Back-End Install
```sh
composer create-project codenteq/imtihan
```

```sh
cd backend && composer install && yarn install
```

```sh
cp .env.example .env
```

::: warning
It will check existence of the .env file, if it exists then please update the file manually with the below details.
:::

```bash
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=imtihan
    DB_USERNAME=root
    DB_PASSWORD=
```

::: warning
It will check existence of the .env file, if it exists then please update the file manually with the below details.
:::

```sh
php artisan migrate --seed
```
### Start Using Imtihan
### On a production server
* Open your domain on the browser. <br> For example:
* `http://example.com`

### On your local device
```sh
php artisan serve or sail up
```

### How to log in to your domain as an portal
Go to `https://localhost:8000`

## Front-End Install

```sh
composer create-project codenteq/imtihan
```

```sh
cd frontend && yarn install && yarn dev
```

```sh
cp .env.example .env
```

### Configuration

::: warning
If the .env file does not exists then it will ask to provide the details on command prompts.
:::

```bash
    NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
    NEXT_PUBLIC_IMAGE_URL=http://localhost:9000
```

### Start Using Imtihan

### On a production server
* Open your domain on the browser. <br> For example:
* `http://example.com`
* `http://example.com/login`

::: warning
If you used the `--seed` command in the back-end, you've created an automatic user! The user's password is set to `password`!
:::
