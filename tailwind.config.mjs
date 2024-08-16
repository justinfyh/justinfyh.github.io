/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#344E41",
        main: "#3A5A40",
        accent: "#DAD7CD",
        secondary: "#588157",
      },
    },
  },
  plugins: [],
};
