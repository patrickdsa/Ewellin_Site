/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./public/js/**/*.js"],
    theme: {
        extend: {
            colors: {
                zinc: {
                    850: '#1f1f22',
                    900: '#18181b',
                    950: '#09090b',
                }
            }
        },
    },
    plugins: [],
    darkMode: 'class',
}
