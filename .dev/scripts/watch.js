import themeKit from '@shopify/themekit';
import yargs from 'yargs';

const {env = 'development', allowLive = false} = yargs(process.argv).argv;

async function watch() {
  await themeKit.command('deploy', {env, allowLive});
  await themeKit.command('watch', {env, allowLive});
}

watch();
