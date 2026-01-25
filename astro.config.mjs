import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      host: '0.0.0.0', // Allow external connections
      allowedHosts: [
        'ikhwansalihin.com',
        'www.ikhwansalihin.com',
        'localhost',
        '127.0.0.1'
      ]
    }
  }
});