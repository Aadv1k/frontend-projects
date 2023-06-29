/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        "primary": "var(--clr-primary)",
        "secondary": "var(--clr-secondary)",
        "headings": "var(--clr-headings)",
        "sub-headings": "var(--clr-sub-headings)",
        "text": "var(--clr-text)",
        "bg":  "var(--clr-bg)"
      }
    },
  },
  plugins: [],
}

