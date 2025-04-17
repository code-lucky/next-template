// tailwind.config.js
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#000000",
          secondary: "#111111",
          accent: "#222222",
          neutral: "#333333",
          "base-100": "#444444",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          serif: ["Merriweather", "serif"],
          mono: ["Monaco", "monospace"],
        },
        container: {
          center: true,
          padding: "1rem",
        },
        animation: {
          "spin-slow": "spin 3s linear infinite",
          "bounce-slow": "bounce 2s linear infinite",
          "pulse-slow": "pulse 2s linear infinite",
          "fade-in": "fadeIn 1s ease-in-out",
          "fade-out": "fadeOut 1s ease-in-out",
        },
        screens: {
          "sm": "640px",
          "md": "768px",
          "lg": "1024px",
          "xl": "1280px",
          "2xl": "1536px",
        },
      },
    },
    plugins: [],
  }
  