## Why

There are a few "OAS Schema" packages already, however, most come with extra bloat, and all of them are manually updated by the maintainer.

This package is automatically updated by [`Dependabot`](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/about-dependabot-version-updates), and deployed / published with [GitHub Actions](.github/workflows/release.yml)

## What

A simple npm package that includes the OAS Schema files and exports them for usage in your code.

```
.
├── LICENSE
├── index.js
└── schemas
    ├── v1.2
    │   ├── README.md
    │   ├── apiDeclaration.json
    │   ├── authorizationObject.json
    │   ├── dataType.json
    │   ├── dataTypeBase.json
    │   ├── infoObject.json
    │   ├── modelsObject.json
    │   ├── oauth2GrantType.json
    │   ├── operationObject.json
    │   ├── parameterObject.json
    │   ├── resourceListing.json
    │   └── resourceObject.json
    ├── v2.0
    │   ├── README.md
    │   └── schema.json
    └── v3.0
        ├── README.md
        ├── schema.json
        └── schema.yaml
```

## How

```js
// directly require the JSON schema files
const oas2 = require('oas-schemas/schemas/v2.0/schema.json')
const oas3 = require('oas-schemas/schemas/v3.0/schema.json')

// require all the schemas in one object
const schemas = require('oas-schemas')

/** schemas is an object with the following shape:
  {
    1.2: {
      apiDeclaration: ...
      authorizationObject: ...
      dataType: ...
      dataTypeBase: ...
      infoObject: ...
      modelsObject: ...
      oauth2GrantType: ...
      operationObject: ...
      parameterObject: ...
      resourceListing: ...
      resourceObject: ...
    },
    2.0: ...
    3.0: ...
  }
*/
```
