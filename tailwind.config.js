/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         cursor: {
            fancy: 'url(https://www.iconsdb.com/icons/preview/white/rectangle-xxl.png), pointer',
         },
      },
   },
   plugins: [],
};
