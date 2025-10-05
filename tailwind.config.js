/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // 👈 makes Tailwind scan your React files
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
            screens: {
                sm: '480px',
                md: '1024px',
                lg: '1280px',
                xl: '1536px',
            },
        },
    },
    plugins: [],
}
