const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'BlueBird-Movies-main',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

