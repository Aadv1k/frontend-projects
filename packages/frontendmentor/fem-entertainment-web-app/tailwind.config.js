/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        colors: {
            "blue-gray": "#5a6990",
            "indigo-1": "#161d2f",
            "indigo-2": "#10141f",
            "tomato-red": "#fd4644",
            "off-white": "#fcffff",
            "light-gray": "#cbccce",
            "white": "#ffffff"
        }
    },
  },
  plugins: [],
}

