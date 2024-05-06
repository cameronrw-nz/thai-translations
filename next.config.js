/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    const nextConfig = {
        output: "export",
        reactStrictMode: true,
    };

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            ...defaultConfig,
            ...nextConfig
        }
    }

    else {
        return {
            ...defaultConfig,
            ...nextConfig,
            basePath: "/thai-translations",
        }
    }
}