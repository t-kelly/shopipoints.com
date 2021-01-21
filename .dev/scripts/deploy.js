import themeKit from '@shopify/themekit';
import yargs from 'yargs';

const {env = 'development', allowLive = false} = yargs(process.argv).argv;

async function deploy() {
  await themeKit.command('deploy', {env, allowLive});
}

deploy();
