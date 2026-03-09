const https = require('https');
const fs = require('fs');

const file = fs.readFileSync('lib/data.ts', 'utf8');
const matches = [...file.matchAll(/getDriveUrl\('([^']+)'\)/g)].map(m => m[1]);
const unique = [...new Set(matches)];

console.log('Total unique IDs:', unique.length);

unique.forEach(id => {
    const url = 'https://lh3.googleusercontent.com/d/' + id;
    https.get(url, (res) => {
        const isOk = res.statusCode === 200 || res.statusCode === 302 || res.statusCode === 303 || res.statusCode === 301;
        const type = res.headers['content-type'];
        if (!isOk || (type && type.includes('text/html'))) {
            console.log(id, 'INVALID', res.statusCode, type);
        } else {
            console.log(id, 'OK', res.statusCode, type);
        }
    }).on('error', e => console.log(id, 'ERROR', e.message));
});
