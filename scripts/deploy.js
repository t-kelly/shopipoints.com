const themeKit = require('@shopify/themekit');

console.log('Starting Deploy');

themeKit.command('deploy', {
  env: 'development',
  allowLive: true
}).then(()=> {
  console.log('Deploy Complete 😘');
});
