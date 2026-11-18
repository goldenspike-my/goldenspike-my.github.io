import type { APIRoute } from 'astro';
import { rss } from '../lib/feed';
export const GET: APIRoute = (ctx) => rss('zh', ctx);
