import themeKit from '@shopify/themekit';
import yargs from 'yargs'

const {password, themeId, store} = yargs(process.argv).argv;

await themeKit.command('configure', {password, themeId, store});