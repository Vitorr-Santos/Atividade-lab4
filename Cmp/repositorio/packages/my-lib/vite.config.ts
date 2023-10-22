import react from '@vitejs/plugin-react';
import { resolve } from 'node:path'
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            rollupTypes: true
        }),
    ],
    build: {
        lib: {
            entry: resolve('src', 'lib/index.ts'),
            name: 'MyLib1',
            formats: ['es', 'umd'],
            fileName: (format) => `mylib1.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
    },
});
