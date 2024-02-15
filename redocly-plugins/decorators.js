const TrimDescription = require('./decorators/trim-description');
const OneSecurityScheme = require('./decorators/one-security-scheme');
const RemoveParameters = require('./decorators/remove-parameters');
const RemoveUnusedTags = require('./decorators/remove-unused-tags');

const id = 'plugin';

/** @type {import('@redocly/cli').DecoratorsConfig} */
const decorators = {
  oas3: {
    'trim-description': TrimDescription,
    'one-security-scheme': OneSecurityScheme,
    'remove-parameters': RemoveParameters,
    'remove-unused-tags': RemoveUnusedTags,
  }
};

module.exports = {
  id,
  decorators,
};
