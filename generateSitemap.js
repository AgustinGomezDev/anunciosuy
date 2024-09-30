import fs from 'fs'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/publicar', changefreq: 'weekly', priority: 0.9 },
    { url: '/publicar/mi-anuncio/:id', changefreq: 'weekly', priority: 0.9 },
    { url: '/anuncios', changefreq: 'weekly', priority: 0.8 },
    { url: '/anuncios/:id', changefreq: 'weekly', priority: 0.8 },
    { url: '/registro', changefreq: 'monthly', priority: 0.7 },
    { url: '/inicio-sesion', changefreq: 'monthly', priority: 0.7 },
    { url: '*', changefreq: 'monthly', priority: 0.5 }
];

async function generateSitemap() {
    const sitemapStream = new SitemapStream({ hostname: 'https://www.anunciosuy.com' });

    const xmlData = await streamToPromise(
        Readable.from(routes).pipe(sitemapStream)
    ).then(data => data.toString());

    fs.writeFileSync('./public/sitemap.xml', xmlData);
    console.log('Sitemap generado en ./public/sitemap.xml');
}

generateSitemap();