# Installation

# Back-End Install
```bash
composer create-project codenteq/imtihan
```
```bash
cd backend && composer install
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
## Start Using Imtihan
### On a production server
* Open your domain on the browser. <br> For example:
* `http://example.com`

### On your local device
```bash
php artisan serve
```
### How to log in to your domain as an portal
Go to `https://localhost:8000`

# Front-End Install
## Configuration
> **WARNING**
>
> It will check existence of the .env file, if it exists then please update the file manually with the below details.

```bash
    NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
    NEXT_PUBLIC_IMAGE_URL=http://localhost:9000
```
## NPM Configuration
> Install npm packages in root directory
```bash
cd frontend && yarn install
```
> Use the command to run!
```bash
yarn dev
```
