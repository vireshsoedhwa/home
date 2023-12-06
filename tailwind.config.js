/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui'],
            'federalreg': ['ltr-federal-bureau-12', 'sans-serif'],
            'federaldiag': ['ltr-federal-bureau-12-diago', 'sans-serif'],
            'federalhor': ['ltr-federal-bureau-12-horiz', 'sans-serif'],
            'ocr': ['ocr-a-std', 'monospace'],
            'motor': ['motor', 'monospace'],
            'motorstencil': ['motor-stencil', 'sans-serif'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular']
        },
        extend: {
            // spacing: {
            //     '112': '28rem',
            //     '128': '32rem',
            // }
        },
        container: {
            padding: '1.5rem',
            center: true,
        },
    },
    plugins: [],
}