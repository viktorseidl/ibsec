/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
  mode: "jit",
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        // Light Theme Colors
        'light-title-color': '#57534e',         // Navy Blue for Titles
        'light-subtitle-color': '#78716c',      // Steel Blue for Subtitles
        'light-body-text-color': '#455a64',     // Dark Slate Gray for Body Text
        'light-accent-color': '#be123c',        // Light Coral for Accents
        'light-secondary-text-color': '#9ca3af',// Dim Gray for Secondary Text
        'light-background-color': '#e7e5e4',    // Light Gray for Background

        // Dark Theme Colors
        'dark-title': '#7a82af',          // Teal for Titles
        'dark-subtitle': '#595d92',       // Sky Blue for Subtitles
        'dark-body-text': '#d1d5db',      // Soft Light Green for Body Text
        'dark-accent': '#84cc16',         // Light Blue-Green for Accents
        'dark-secondary-text': '#6b7280', // Muted Aqua for Secondary Text
        'dark-background': '#1c1917',     // Dark Slate Blue for Background
      },
      screens: {
        'md': { 'raw': '(min-width: 1430px)' },
        'lgo': { 'raw': '(min-width: 830px) and (max-width: 1430px)' },
        'osm': { 'raw': '(min-width: 530px) and (max-width: 850px) and (min-height: 1000px)' }, 
        'print':{'raw':'print'},
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "grow-left": {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "75%",
          },
        },
        "growLeft": {
          "0%": { 
            overflow:"hidden",
            width: "0%",
          },
          "100%": { 
            overflow:"hidden",
            width: "100%",
          },
        },
        "slide-inleft": {
          "0%": {
            "-webkit-transform": "translateX(-120%)",
            transform: "translateX(-120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "slide-inright": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        'fadeIn': {
          '0%': {
            opacity: 0,
          },        
          '100%': {
            opacity: 1,
          },
        },
        'fadeOut': {
          '0%': {
            opacity: 1,
          },        
          '100%': {
            opacity: 0,
          },
        },
        'fadeInNav': {
          '0%': {
            opacity: 0,
          }, 
          '40%': {
            opacity: 0,
          },       
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "slide-inleft": "slide-inleft 0.5s ease-out",
        "slide-inright": "slide-inright 0.5s ease-out",
        'spin-slow': 'spin 3s linear infinite',
        'fadeInw': 'fadeInNav 1s',
        'fadeOut': 'fadeOut 1s',
        'growleft': 'grow-left 0.5s ease-out',
        'growLeft': 'growLeft 0.5s ease-out',
        'fadeIn': 'fadeIn 1s',
        'fadeInfast': 'fadeIn 0.3s'
      },
    },
  },
  variants: {
    extend: {},
  },
}
