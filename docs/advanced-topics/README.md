# Advanced Topics

In this section, we will discuss advanced topics of eExam such as creating payment methods, question methods, data grids, and more. Before diving into this, we assume you are familiar with Laravel.

## Minio
### MinIO High Performance Object Storage
MinIO is a high performance object storage solution that provides an Amazon Web Services S3-compatible API and supports all core S3 features. MinIO is built to deploy anywhere - public or private cloud, baremetal infrastructure, orchestrated environments, and edge infrastructure.
### Setup and installation
### Cloud
To use the [MinIO](https://min.io/) cloud base, you can register and follow the documents.
### Docker
If you're using Docker, you won't need to use the cloud. Instead, start the project using the command line and run it to `localhost:9000`.
```bash
./vendor/bin/sail up
```
Configure MinIO in .env:
```bash
MINIO_ENDPOINT=http://minio:9000
MINIO_URL=http://localhost:9000
MINIO_KEY=sail
MINIO_SECRET=password
MINIO_REGION=us-east-1
MINIO_BUCKET=imtihan
```

## Meilisearch
It will walk you through installing Meilisearch, adding documents, performing your first search, using the search preview, and protecting your cloud server.
### Setup and installation
### Cloud
To use the [Meilisearch](https://www.meilisearch.com/) cloud base, you can register and follow the documents.
### Docker
If you're using Docker, you won't need to use the cloud. Instead, start the project using the command line and run it to `localhost:7700`.
```bash
./vendor/bin/sail up
```
Configure Meilisearch in .env:
```bash
SCOUT_DRIVER=meilisearch
MEILISEARCH_HOST=http://meilisearch:7700
MEILISEARCH_KEY=masterKey
SCOUT_QUEUE=true
```
## Batch Import
If you are installing Scout into an existing project, you may already have database records you need to import into your indexes. Scout provides a `scout:import` Artisan command that you may use to import all of your existing records into your search indexes:
```bash
sail artisan scout:import "App\Models\Name"
```
The `flush` command may be used to remove all of a model's records from your search indexes:
```bash
sail artisan scout:flush "App\Models\Name"
```

## Queueing
While not strictly required to use Scout, you should strongly consider configuring a [queue driver](https://laravel.com/docs/10.x/queues) before using the library. Running a queue worker will allow Scout to queue all operations that sync your model information to your search indexes, providing much better response times for your application's web interface.

Once you have configured a `queue` driver, set the value of the queue option in your `config/scout.php` configuration file to `true`:
```bash
'queue' => true,
```
Even when the `queue` option is set to `false`, it's important to remember that some Scout drivers like Algolia and Meilisearch always index records asynchronously. Meaning, even though the index operation has completed within your Laravel application, the search engine itself may not reflect the new and updated records immediately.

To specify the connection and queue that your Scout jobs utilize, you may define the `queue` configuration option as an array:
```bash
'queue' => [
    'connection' => 'redis',
    'queue' => 'scout'
],
```
