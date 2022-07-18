# Vega Wallet API Client

Generated Typescript client that utilizes fetch-api. Code is generated using [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator)

You will need to [install the OpenAPI Generator CLI](https://github.com/OpenAPITools/openapi-generator#1---installation)

## Generate

To generate the typescript rest client run:

```
openapi-generator generate -i ./vegawallet-rest-service.json -g typescript
```

or use the npm script:

```
yarn generate
```

## Building

To build and compile the typescript sources to javascript use:

```
yarn install
yarn build
```
