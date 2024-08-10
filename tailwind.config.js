/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'BANNER_BG_IMG_URL': "url('https://teeperfect.myshopify.com/cdn/shop/files/cta_countdown_bg_f8559861-5e61-4106-9ab4-baafcb9b5c29.jpg')",
        }
      },
    },
    plugins: [],
  } 