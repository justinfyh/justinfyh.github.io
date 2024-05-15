/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                background: "#121212",
                main: "#212121",
                accent: "#1db954",
                secondary: "#535353",
            },
        },
    },
    plugins: [],
};
