import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'kabi-black': '#262626',
                'kabi-gray': '#686868',
                'kabi-blue': '#5EA0E0',

            },
            fontSize: {
                xs: ['13px', '18px'],
            },
            borderRadius: {
                DEFAULT: '5px',
            },
        },
    },

    plugins: [forms],
};
