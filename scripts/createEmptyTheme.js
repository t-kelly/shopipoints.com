import fetch from 'node-fetch';
import yargs from 'yargs'

const {name,store,token} = yargs(process.argv).argv;

async function createEmptyTheme(name) {
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

const theme = await createEmptyTheme(name);

// Output theme id so that we can use it to generate a preview URL
console.log(theme.id);
