import esbuild from 'rollup-plugin-esbuild';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';

const config = [
    {
        input: ['src/index.ts'],
        plugins: [esbuild(), json()],
        output: [
            {
                dir: 'dist',
                format: 'cjs',
                exports: 'named',
                sourcemap: true,
                preserveModules: false // Keep directory structure and files
            }
        ]
    },
    {
        input: ['src/index.ts'],
        plugins: [typescript()],
        output: [
            {
                dir: 'dist',
                format: 'es',
                sourcemap: true
            }
        ]
    }
];

export default config;
