import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        proxy: {
            '^/.*': {
                target: '/',
                rewrite: () => '/index.html',
            },
        },
    },
});