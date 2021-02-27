# OAS Schemas

Schema files for Specification, kept automatically up-to-date

[![license][license-img]][license-url]
[![release][release-img]][release-url]
[![super linter][super-linter-img]][super-linter-url]
[![test][test-img]][test-url]
[![semantic][semantic-img]][semantic-url]

## Why

There are a few "OAS Schema" packages already, however, most come with extra bloat, and all of them are manually updated by the maintainer.

This package is automatically updated by [`Dependabot`][], and deployed / published with [GitHub Actions][]

## What

A simple npm package that includes the OAS Schema files and exports them for usage in your code.

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

## How

``` js
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

  [`Dependabot`]: https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/about-dependabot-version-updates
  [GitHub Actions]: .github/workflows/release.yml

----
> Author: [Ahmad Nassri](https://www.ahmadnassri.com/) &bull;
> Twitter: [@AhmadNassri](https://twitter.com/AhmadNassri)

[license-url]: LICENSE
[license-img]: https://badgen.net/github/license/ahmadnassri/node-oas-schemas

[release-url]: https://github.com/ahmadnassri/node-oas-schemas/releases
[release-img]: https://badgen.net/github/release/ahmadnassri/node-oas-schemas

[super-linter-url]: https://github.com/ahmadnassri/node-oas-schemas/actions?query=workflow%3Asuper-linter
[super-linter-img]: https://github.com/ahmadnassri/node-oas-schemas/workflows/super-linter/badge.svg

[test-url]: https://github.com/ahmadnassri/node-oas-schemas/actions?query=workflow%3Atest
[test-img]: https://github.com/ahmadnassri/node-oas-schemas/workflows/test/badge.svg

[semantic-url]: https://github.com/ahmadnassri/node-oas-schemas/actions?query=workflow%3Arelease
[semantic-img]: https://badgen.net/badge/📦/semantically%20released/blue
