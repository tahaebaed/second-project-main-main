// tailwind.config.js
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  // Enable dark mode with the 'class' strategy.
  // When the 'dark' class is present on the <html> element,
  // dark mode styles like `dark:bg-gray-800` will be applied.
  darkMode: 'class',

  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {},
  },

  plugins: [
    typography,
    forms,
  ],
};