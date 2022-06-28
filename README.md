# Vega Wallet API Client

Generated Typescript client that utilizes fetch-api. Code is generated using [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator)

You will need to [nstall the OpenAPI Generator CLI](https://github.com/OpenAPITools/openapi-generator#1---installation)

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

## Running against local

Run in this repository:

```
yarn link
```

And in the consuming repository:

```
yarn link @vegaprotocol/vegawallet-service-api-client
```

and you will be able to test your branch.

### NOTE

This will serve from dist so you will need to run `yarn build` after each set of changes you wish to test.
