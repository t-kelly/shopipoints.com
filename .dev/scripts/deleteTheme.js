import fetch from 'node-fetch';
import yargs from 'yargs';

const {name, store, token} = yargs(process.argv).argv;

async function requestGetThemes() {
  const res = await fetch(`https://${store}/admin/api/2020-10/themes.json`, {
    headers: {
      'X-Shopify-Access-Token': token,
    },
  });

  const {themes} = await res.json();

  return themes;
}

async function requestDeleteTheme(themeId) {
  const res = await fetch(`https://${store}/admin/api/2020-10/themes/${themeId}.json`, {
    method: 'DELETE',
    headers: {
      'X-Shopify-Access-Token': token,
    },
  });

  const {themes} = await res.json();

  return themes;
}

async function deleteTheme() {
  const themes = await requestGetThemes();
  const themeToDelete = themes.filter((item) => item.name === name && item.role === 'unpublished');

  await Promise.all(themeToDelete.map(async (theme) => {
    await requestDeleteTheme(theme.id);
  }));
}

deleteTheme();
