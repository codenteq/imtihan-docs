# Package development

A package is a unit added to your application for enhancement which includes routes, controllers, views, and configuration specifically. Packages are created to manage your large applications into smaller units.

You can find a basic tree-structure of the package below:

```bash
- app/
  - Console/
  - Exceptions/
  - Http/
    - Controllers/API/
      - ExampleController.php
    - Middleware/
    - Requests/
      - StoreExampleRequest.php
      - UpdateExampleRequest.php
    - Resources/
      - ExampleResource.php
  - Jobs/
  - Models/
    - Example.php
  - Providers/
  - Services/
    - BaseService.php
    - ExampleService.php
  - Traits/
- database/
  - factories/
    - ExampleFactory.php
  - migrations/
    - create_examples_table.php
  - seeders/
- routes/
  - api.php
  - auth.php
  - channels.php
  - console.php
  - web.php
- tests/
  - Feature/
    - ExampleTest.php
  - Unit/
    - ExampleTest.php
```

## Create a new package

## Back-end
There are two ways to create a package.
1. By using Laravel Artisan Commands (**Recommended**)
1. By manually setting up all files (**Expert Level**)

### 1. By using Laravel Artisan Commands
### Method 1
With the package builder you can build the entire architecture in one command.
```bash
php artisan package:create --path=Example --name=Example
```
> **You create the Controller API, Store & Update Request, Eloquent: API Resource, Laravel Test structure with the package:create command.**
<br/>--path= is the function used to specify the file path of the package you will create.
<br/>--name= is the function used to specify the name of the package you will create.
***

### Method 2
Now, to generate your package you need to use the following command,
```bash
php artisan make:model Example -m
```
```bash
php artisan make:controller ExampleController --model=Example --api --resource
```
```bash
use App\Http\Controllers\API\ApiController;

class ExampleController extends ApiController
{
  //
}
```
```bash
php artisan make:request StoreExampleRequest
```
```bash
php artisan make:request UpdateExampleRequest
```
```bash
return true;
or
return false;
```
```bash
php artisan make:resource ExampleResource
```
There is no Artisan command to create a service so we will create it manually.
```bash
- app/Services
  - ExampleService.php
```
```bash
use App\Services\Base\BaseService;

class ExampleService extends BaseService
{
    //
}
```
```bash
php artisan make:factory ExampleFactory
```
for feature testing:
```bash
php artisan make:test ExampleControllerTest
```
for unit testing:
```bash
php artisan make:test ExampleControllerTest --unit
```
```bash
use Illuminate\Foundation\Testing\RefreshDatabase;

use RefreshDatabase;

protected string $apiUrl = '/api/';
```

### 2. By manually setting up all files
By manually setting up package, we assume that you are familiar with packages directory structures and flow. If not then you can find a basic tree structure of package below,
<details>
  </br>

  ```bash
- app/
  - Http/
    - Controllers/API/
      - ExampleController.php
    - Requests/
      - StoreExampleRequest.php
      - UpdateExampleRequest.php
    - Resources/
      - ExampleResource.php
  - Models/
    - Example.php
  - Services/
    - BaseService.php
    - ExampleService.php
- database/
  - factories/
    - ExampleFactory.php
  - migrations/
    - create_examples_table.php
- routes/
  - api.php
- tests/
  - Feature/
    - ExampleTest.php
  - Unit/
    - ExampleTest.php
```

</details>

## Front-end

### By manually setting up all files
By manually setting up package, we assume that you are familiar with packages directory structures and flow. If not then you can find a basic tree structure of package below,
<details>
  </br>

  ```bash
- src/
    - components/
        - example/
            - example.js
    - pages/
      - example/
        - [id]
          - edit.js
          - view.js
      - index.js
      - create.js        
```

</details>
