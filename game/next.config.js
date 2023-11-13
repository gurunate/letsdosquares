const transpileModules = require('next-transpile-modules')([
    '@letsdosquares/core',
    '@letsdosquares/ui-kit'
    // '@letsdosquares/themes'
]);

/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = transpileModules({
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true
    },
    reactStrictMode: false,
    output: 'standalone',
    productionBrowserSourceMaps: true
});

module.exports = nextConfig;
