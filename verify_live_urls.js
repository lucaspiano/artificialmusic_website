const https = require('https');
const urls = [
  'https://www.artificialmusic.ai',
  'https://artificialmusic.ai',
  'https://www.artificialmusic.ai/sonifya',
  'https://www.artificialmusic.ai/projects',
];

const requests = urls.map(url => {
  return new Promise(resolve => {
    https.get(url, res => {
      let body = '';
      res.on('data', chunk => { body += chunk.toString(); });
      res.on('end', () => {
        const match = body.match(/<title>(.*?)<\/title>/i);
        const title = match ? match[1] : 'no title';
        resolve(`${url} -> ${res.statusCode} - ${title}`);
      });
    }).on('error', err => {
      resolve(`${url} -> ERROR ${err.message}`);
    });
  });
});

Promise.all(requests).then(results => {
  results.forEach(line => console.log(line));
});
