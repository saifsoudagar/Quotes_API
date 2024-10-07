/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                teal: {
                    50: '#e6fffa',
                    100: '#b2f5ea',
                    200: '#81e6d9',
                    300: '#4fd1c5',
                    400: '#38b2a5',
                    500: '#319795',
                    600: '#2c7a7f',
                    700: '#285e61',
                    800: '#234e52',
                    900: '#1d4044',
                },
                coral: {
                    50: '#fff5f0',
                    100: '#ffe3e3',
                    200: '#ffc1c1',
                    300: '#ff9aa5',
                    400: '#ff6f61',
                    500: '#ff4f4f',
                    600: '#ff3d3d',
                    700: '#ff2a2a',
                    800: '#ff1c1c',
                    900: '#ff0c0c',
                },
            },
        },
    },
    plugins: [],
};