import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig({
    ...viteConfig,
    test: {
        globals: true,
        environment: 'jsdom',
        snapshotFormat: {
            maxDepth: 4
        },
        reporters: 'verbose',
    },
    root: ".", //Define the root
});