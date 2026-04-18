export default function sitemap() {
  const baseUrl = 'https://your-deployed-domain.com'; // Replace with your actual domain later

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
