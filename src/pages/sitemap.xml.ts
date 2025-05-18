import { defineConfig } from 'astro/config';

export async function GET() {
  const baseUrl = 'https://stembotics.org';
  
  // Define your static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/courses',
    '/why-us',
    '/faq',
    '/privacy',
    '/terms',
    '/resources',
    '/teachers',
    '/signup',
    '/login'
  ];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
} 