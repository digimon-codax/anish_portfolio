export default function robots() {
  const baseUrl = 'https://your-deployed-domain.com'; // Replace with your actual domain later

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
