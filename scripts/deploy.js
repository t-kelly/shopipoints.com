import themeKit from '@shopify/themekit';
import yargs from 'yargs'

const {env = 'development', allowLive = false} = yargs(process.argv).argv;

await themeKit.command('deploy', {env, allowLive});
