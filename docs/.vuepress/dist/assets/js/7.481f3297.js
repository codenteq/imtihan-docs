(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{285:function(e,a,t){"use strict";t.r(a);var s=t(10),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"advanced-topics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-topics"}},[e._v("#")]),e._v(" Advanced Topics")]),e._v(" "),a("p",[e._v("In this section, we will discuss advanced topics of eExam such as creating payment methods, question methods, data grids, and more. Before diving into this, we assume you are familiar with Laravel.")]),e._v(" "),a("h2",{attrs:{id:"minio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minio"}},[e._v("#")]),e._v(" Minio")]),e._v(" "),a("h3",{attrs:{id:"minio-high-performance-object-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minio-high-performance-object-storage"}},[e._v("#")]),e._v(" MinIO High Performance Object Storage")]),e._v(" "),a("p",[e._v("MinIO is a high performance object storage solution that provides an Amazon Web Services S3-compatible API and supports all core S3 features. MinIO is built to deploy anywhere - public or private cloud, baremetal infrastructure, orchestrated environments, and edge infrastructure.")]),e._v(" "),a("h3",{attrs:{id:"setup-and-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-installation"}},[e._v("#")]),e._v(" Setup and installation")]),e._v(" "),a("h3",{attrs:{id:"cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloud"}},[e._v("#")]),e._v(" Cloud")]),e._v(" "),a("p",[e._v("To use the "),a("a",{attrs:{href:"https://min.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MinIO"),a("OutboundLink")],1),e._v(" cloud base, you can register and follow the documents.")]),e._v(" "),a("h3",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("p",[e._v("If you're using Docker, you won't need to use the cloud. Instead, start the project using the command line and run it to "),a("code",[e._v("localhost:9000")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./vendor/bin/sail up\n")])])]),a("p",[e._v("Configure MinIO in .env:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MINIO_ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://minio:9000\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MINIO_URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://localhost:9000\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MINIO_KEY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("sail\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MINIO_SECRET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("password\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MINIO_REGION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("us-east-1\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MINIO_BUCKET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("imtihan\n")])])]),a("h2",{attrs:{id:"meilisearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meilisearch"}},[e._v("#")]),e._v(" Meilisearch")]),e._v(" "),a("p",[e._v("It will walk you through installing Meilisearch, adding documents, performing your first search, using the search preview, and protecting your cloud server.")]),e._v(" "),a("h3",{attrs:{id:"setup-and-installation-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-installation-2"}},[e._v("#")]),e._v(" Setup and installation")]),e._v(" "),a("h3",{attrs:{id:"cloud-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloud-2"}},[e._v("#")]),e._v(" Cloud")]),e._v(" "),a("p",[e._v("To use the "),a("a",{attrs:{href:"https://www.meilisearch.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Meilisearch"),a("OutboundLink")],1),e._v(" cloud base, you can register and follow the documents.")]),e._v(" "),a("h3",{attrs:{id:"docker-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-2"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("p",[e._v("If you're using Docker, you won't need to use the cloud. Instead, start the project using the command line and run it to "),a("code",[e._v("localhost:7700")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./vendor/bin/sail up\n")])])]),a("p",[e._v("Configure Meilisearch in .env:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SCOUT_DRIVER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("meilisearch\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MEILISEARCH_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://meilisearch:7700\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MEILISEARCH_KEY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("masterKey\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SCOUT_QUEUE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n")])])]),a("h2",{attrs:{id:"batch-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-import"}},[e._v("#")]),e._v(" Batch Import")]),e._v(" "),a("p",[e._v("If you are installing Scout into an existing project, you may already have database records you need to import into your indexes. Scout provides a "),a("code",[e._v("scout:import")]),e._v(" Artisan command that you may use to import all of your existing records into your search indexes:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("sail artisan scout:import "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"App\\Models\\Name"')]),e._v("\n")])])]),a("p",[e._v("The "),a("code",[e._v("flush")]),e._v(" command may be used to remove all of a model's records from your search indexes:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("sail artisan scout:flush "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"App\\Models\\Name"')]),e._v("\n")])])]),a("h2",{attrs:{id:"queueing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queueing"}},[e._v("#")]),e._v(" Queueing")]),e._v(" "),a("p",[e._v("While not strictly required to use Scout, you should strongly consider configuring a "),a("a",{attrs:{href:"https://laravel.com/docs/10.x/queues",target:"_blank",rel:"noopener noreferrer"}},[e._v("queue driver"),a("OutboundLink")],1),e._v(" before using the library. Running a queue worker will allow Scout to queue all operations that sync your model information to your search indexes, providing much better response times for your application's web interface.")]),e._v(" "),a("p",[e._v("Once you have configured a "),a("code",[e._v("queue")]),e._v(" driver, set the value of the queue option in your "),a("code",[e._v("config/scout.php")]),e._v(" configuration file to "),a("code",[e._v("true")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'queue'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),a("p",[e._v("Even when the "),a("code",[e._v("queue")]),e._v(" option is set to "),a("code",[e._v("false")]),e._v(", it's important to remember that some Scout drivers like Algolia and Meilisearch always index records asynchronously. Meaning, even though the index operation has completed within your Laravel application, the search engine itself may not reflect the new and updated records immediately.")]),e._v(" "),a("p",[e._v("To specify the connection and queue that your Scout jobs utilize, you may define the "),a("code",[e._v("queue")]),e._v(" configuration option as an array:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'queue'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'connection'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'redis'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'queue'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'scout'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);