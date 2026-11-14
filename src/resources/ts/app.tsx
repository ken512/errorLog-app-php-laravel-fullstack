import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import type { ComponentType } from 'react';
import '../css/app.css';

const pages = import.meta.glob<{ default: ComponentType }>(
    './Pages/**/*.tsx',
);

createInertiaApp({
    resolve: async (name) => {

        const loadPage = pages[`./Pages/${name}.tsx`];
        if (!loadPage) {
            throw new Error(`ページが見つかりません: ${name}`);
        }

        const page = await loadPage();

        return page.default;
    },

    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
