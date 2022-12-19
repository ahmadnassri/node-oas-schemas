const { join } = require('path')
const { readFileSync } = require('fs')

/* istanbul ignore next */
const load = process.platform === 'win32' ? file => JSON.parse(readFileSync(file)) : require

const root = join(__dirname, '..', 'schemas')

module.exports = {
  1.2: {
    apiDeclaration: load(join(root, 'v1.2', 'apiDeclaration.json')),
    authorizationObject: load(join(root, 'v1.2', 'authorizationObject.json')),
    dataType: load(join(root, 'v1.2', 'dataType.json')),
    dataTypeBase: load(join(root, 'v1.2', 'dataTypeBase.json')),
    infoObject: load(join(root, 'v1.2', 'infoObject.json')),
    modelsObject: load(join(root, 'v1.2', 'modelsObject.json')),
    oauth2GrantType: load(join(root, 'v1.2', 'oauth2GrantType.json')),
    operationObject: load(join(root, 'v1.2', 'operationObject.json')),
    parameterObject: load(join(root, 'v1.2', 'parameterObject.json')),
    resourceListing: load(join(root, 'v1.2', 'resourceListing.json')),
    resourceObject: load(join(root, 'v1.2', 'resourceObject.json'))
  },
  2.0: load(join(root, 'v2.0', 'schema.json')),
  3.0: load(join(root, 'v3.0', 'schema.json')),
  3.1: load(join(root, 'v3.1', 'schema.json'))
}
