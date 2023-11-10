import esbuild from 'rollup-plugin-esbuild';
import json from '@rollup/plugin-json';

const config = [
    {
        input: ['src/index.ts', 'types.ts', 'fixtures.ts', 'utils.ts'],
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
    }
];

export default config;
