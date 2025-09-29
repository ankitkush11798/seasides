export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/_next/']
    },
    sitemap: 'https://www.seasides.net/sitemap.xml'
  };
}
