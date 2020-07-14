require('isomorphic-fetch');
require('dotenv').config();
const fs = require('fs');
const globby = require('globby');

const urlToXML = (url) => `
<url>
  <loc>${url}</loc>
</url>
`

const run = async () => {

  const files = await globby([
    'src/pages/**/*{.jsx,.mdx}',
    '!src/pages/_*.jsx',
  ]);
  const pages = files
    .filter((path) => !/\[/.test(path))
    .map((path) => (
      path
        .replace(/^src\/pages(.*)?\.jsx$/i, '$1')
        .replace(/index$/, '')
        .replace(/(.*)$/, `${process.env.API_URL}$1`)
    ));

  let page = 1;
  let xml = pages.map(urlToXML);
  console.log('Gerando páginas das cartas')
  while (true) {
    console.log(`\tPágina ${page*200}...`)
    const res = await fetch(`${process.env.API_URL}/cards?page=${page}&max_results=200`);
    page += 1;
    const { results: cards } = await res.json();
    if (!cards || cards.length === 0) {
      break;
    }
    const links = cards.map((card) => urlToXML(`https://magicnext.com.br/card/${card.slug}`));
    xml.push(links.join(''));
  }
  page = 1;
  console.log('Gerando páginas dos commanders')
  while (true) {
    console.log(`\tPágina ${page*200}...`)
    const res = await fetch(`${process.env.API_URL}/ranking?page=${page}&maxResults=200`);
    page += 1;
    const cards = await res.json();
    if (!cards || cards.length === 0) {
      break;
    }
    const links = cards.map((card) => urlToXML(`https://magicnext.com.br/card/${card.card.slug}?commander=0`));
    const averages = cards.map((card) => urlToXML(`https://magicnext.com.br/card/${card.card.slug}/average`));
    xml.push(links.join(''));
    xml.push(averages.join(''));
  }
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${xml.join('')}
    </urlset>
  `;
  fs.writeFileSync('public/sitemap.xml', sitemap.replace(/\s/g, ''), 'utf8');
};

run()
  .then(process.exit)
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
