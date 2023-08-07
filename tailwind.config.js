import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

function darkenHexColor(hex, percent) {
    // Convert hex to RGB
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    // Reduce the brightness by the given percent
    r = parseInt(r * (1 - percent / 100));
    g = parseInt(g * (1 - percent / 100));
    b = parseInt(b * (1 - percent / 100));

    // Convert RGB back to hex
    r = r.toString(16).padStart(2, '0');
    g = g.toString(16).padStart(2, '0');
    b = b.toString(16).padStart(2, '0');

    return `#${r}${g}${b}`;
}

export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'dn0': '#ffffff',
                'dn1': '#fcfcfc',
                'dn2': '#f4f4f4',
                'dn3': '#efefef',
                'dn4': '#6f767e',
                'dn5': '#33383f',
                'dn6': '#272b30',
                'dn7': '#1a1d1f',
                'dn8': '#111315',
                'dp1': '#2a85ff',
                'dp2': '#83bf6e',
                'dp3': '#ff6a55',
                'dp4': '#8e59ff',
                'ds1': '#ffbc99',
                'ds2': '#cabdff',
                'ds3': '#b1e5fc',
                'ds4': '#b5e4ca',
                'ds5': '#ffd88d',
                'dp1-base': darkenHexColor('#2a85ff', 80),
                'dp2-base': darkenHexColor('#83bf6e', 80),
                'dp3-base': darkenHexColor('#ff6a55', 80),
                'dp4-base': darkenHexColor('#8e59ff', 80),
                'ds1-base': darkenHexColor('#ffbc99', 80),
                'ds2-base': darkenHexColor('#cabdff', 80),
                'ds3-base': darkenHexColor('#b1e5fc', 80),
                'ds4-base': darkenHexColor('#b5e4ca', 80),
                'ds5-base': darkenHexColor('#ffd88d', 80),
            },
        },
    },
    corePlugins: {
        preflight: false
    },
    plugins: [forms, require('@tailwindcss/typography'),],
};
