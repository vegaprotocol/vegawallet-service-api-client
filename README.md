## @

This generator creates TypeScript/JavaScript client that utilizes fetch-api.

### Building

Before building you'll need to install openapi generator. [Info here](https://github.com/OpenAPITools/openapi-generator#1---installation)

To generate the client code run:

```
openapi-generator generate -i ./swagger.json -g typescript
```

To build and compile the typescript sources to javascript use:

```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @ --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```
