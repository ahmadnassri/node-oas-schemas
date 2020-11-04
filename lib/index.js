const { join } = require('path')

const root = join(__dirname, '..', 'schemas')

module.exports = {
  1.2: {
    apiDeclaration: require(join(root, 'v1.2', 'apiDeclaration.json')),
    authorizationObject: require(join(root, 'v1.2', 'authorizationObject.json')),
    dataType: require(join(root, 'v1.2', 'dataType.json')),
    dataTypeBase: require(join(root, 'v1.2', 'dataTypeBase.json')),
    infoObject: require(join(root, 'v1.2', 'infoObject.json')),
    modelsObject: require(join(root, 'v1.2', 'modelsObject.json')),
    oauth2GrantType: require(join(root, 'v1.2', 'oauth2GrantType.json')),
    operationObject: require(join(root, 'v1.2', 'operationObject.json')),
    parameterObject: require(join(root, 'v1.2', 'parameterObject.json')),
    resourceListing: require(join(root, 'v1.2', 'resourceListing.json')),
    resourceObject: require(join(root, 'v1.2', 'resourceObject.json'))
  },
  2.0: require(join(root, 'v2.0', 'schema.json')),
  3.0: require(join(root, 'v3.0', 'schema.json'))
}
