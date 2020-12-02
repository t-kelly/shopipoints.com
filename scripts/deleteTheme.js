import fetch from 'node-fetch';
import yargs from 'yargs'

const {name,store,token} = yargs(process.argv).argv;

async function getThemes() {
  const res = await fetch(`https://${store}/admin/api/2020-10/themes.json`, {
    headers: {
      'X-Shopify-Access-Token': token,
    },
  });

  const {themes} = await res.json();

  return themes;
}

async function deleteTheme(themeId) {
  const res = await fetch(`https://${store}/admin/api/2020-10/themes/${themeId}.json`, {
    method: 'DELETE',
    headers: {
      'X-Shopify-Access-Token': token,
    },
  });
}

const themes = await getThemes();
const themeToDelete = themes.filter((item) => item.name == name && item.role == 'unpublished');

await Promise.all(themeToDelete.map(async (theme) => {
  await deleteTheme(theme.id);
}))