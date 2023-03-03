# RESTful API

İmtihan RESTful API is a medium to use the features of the core İmtihan System. By using İmtihan RESTful API, you can integrate your application to serve the default content of İmtihan.

## Key Features
- İmtihan APIs supports REST (Representational State Transfer).
- Authentication: Customer Authentication with Login Details.
- Provide access to performed CRUD operations.
- Also Provide the option to filter the responses based on attribute fields.
- The Framework supports the pagination which helps to increase the performance of application.

## Where can I use İmtihan RESTful API?
We can use the İmtihan APIs in different areas. Some of them are:

- To build a PWA (Progressive Web Application) application, which uses modern web capabilities to deliver an application like experience to the users and provide more user friendly experience than a web application.
- Use the Online E-exam Mobile App to integrate with the Imtihan app to assist the user-friendly interface.
- Use for integration with CRM (Customer Relationship Management) systems. Allow you to manage your business relationships with your customers to help you grow your business.

## Introduction
This documentation aims to provide all the information you need to work with our API.

```sh
php artisan route:list
```

::: warning
In the `route:list` command, you will see the list of all api routes. You can request any api from the list in the `api/example/examples` url example
:::

**api/example/examples** <Badge text="GET"/>

```sh
curl --request GET \
    --get "http://localhost:8000/api/example/examples" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"
```

- cache-control: no-cache, private
- content-type: application/json
- access-control-allow-origin: http://localhost:3000
- access-control-allow-credentials: true

**api/example/examples** <Badge text="POST"/>

```sh
curl --request POST \
    "http://localhost:8000/api/example/examples" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"name\": \"llrsltkaymsifofrjf\"
}"
```

**api/example/examples/{id}** <Badge text="GET"/>

```sh
curl --request GET \
    --get "http://localhost:8000/api/example/examples/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"
```

**api/example/examples/{id}** <Badge text="GET"/>
<br/>
**api/example/examples/{id}** <Badge text="PATCH"/>

```sh
curl --request PUT \
    "http://localhost:8000/api/example/examples/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"name\": \"xhmp\"
}"
```

**api/example/examples/{id}** <Badge type="error" text="DELETE"/>

```sh
curl --request DELETE \
    "http://localhost:8000/api/example/examples/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"
```
