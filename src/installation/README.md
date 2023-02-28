# Installation

## Back-End Install
```bash
composer create-project codenteq/imtihan
```

```bash
cd backend && composer install && yarn install
```

```bash
cp .env.example .env
```

> **WARNING**
>
> It will check existence of the .env file, if it exists then please update the file manually with the below details.

```bash
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=imtihan
    DB_USERNAME=root
    DB_PASSWORD=
```
> **WARNING**
>
> If the .env file does not exists then it will ask to provide the details on command prompts.
```bash
php artisan migrate --seed
```
### Start Using Imtihan
### On a production server
* Open your domain on the browser. <br> For example:
* `http://example.com`

### On your local device
```bash
php artisan serve or sail up
```

### How to log in to your domain as an portal
Go to `https://localhost:8000`

## Front-End Install

```bash
composer create-project codenteq/imtihan
```

```bash
cd frontend && yarn install && yarn dev
```

```bash
cp .env.example .env
```

### Configuration
> **WARNING**
>
> If the .env file does not exists then it will ask to provide the details on command prompts.

```bash
    NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
    NEXT_PUBLIC_IMAGE_URL=http://localhost:9000
```

### Start Using Imtihan

### On a production server
* Open your domain on the browser. <br> For example:
* `http://example.com`
* `http://example.com/login`

> **WARNING**
>
> If you used the `--seed` command in the back-end, you've created an automatic user! The user's password is set to `password`!