/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                Primary: '#D87D4A',
                Secondary: '#FBAF85',
                black: '#101010',
                lightGrey: '#F1F1F1',
                darkGrey: '#979797',
                green: '#05cd99',
                lightBlue: '#7b1435',
                lightRed: '#c7447a',
                inputbg: '#f4f4f4',
                gradient1: '#cd2128',
                gradient2: '#490c3c'
            },
        },
    },
    plugins: [],
}