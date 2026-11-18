// robots.txt：告诉搜索引擎整个网站都可以看，并指出网页清单（sitemap）在哪里
import type { APIRoute } from 'astro';
import { asset } from '../lib/i18n';

export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL(asset('sitemap.xml'), site).href}`, ''];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
