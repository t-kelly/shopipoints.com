import fetch from 'node-fetch';
import yargs from 'yargs';

const {name, store, token} = yargs(process.argv).argv;

async function createEmptyTheme() {
  const data = {theme: {name}};

  const res = await fetch(`https://${store}/admin/api/2020-10/themes.json`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': token,
    },
  });

  const {theme} = await res.json();

  return theme;
}

createEmptyTheme()
  .then((theme) => {
  // Output theme id so that we can use it to generate a preview URL
    return console.log(theme.id);
  }).catch((error) => {
    console.error(error);
  });


