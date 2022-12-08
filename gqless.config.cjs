/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: 'string' },
  introspection: {
    //endpoint: 'https://api.biomethane.com.br/graphql',
    endpoint: 'http://localhost:4200/graphql',
    headers: {}
  },
  destination: './src/gqless/index.ts',
  subscriptions: true,
  javascriptOutput: false
};

module.exports = config;
