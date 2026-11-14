import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel({
            input: ['resources/js/app.tsx'],
            refresh: true,
        }),
        react(),
    ],

    server: {
        host: '0.0.0.0',// コンテナの外からViteへ接続できるようにする。
        port: 5173,
        strictPort: true,
        origin: 'http://localhost:5173',
        hmr: {
            host: 'localhost', // Macのブラウザが接続するホストを接続する。
        },
        cors: {
            origin: `http://localhost:8080`,
        },
    },
});