/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx,astro,html}'];
export const theme = {
  extend: {
    animation: {
      glitch: 'glitch 2s infinite',
    },
    colors: {
      bsod: '#000A5F',
      mainSilver: '#A0B2BB',
      mainPurple: '#695A88',
      border: '#AAAAAA',
    },
    fontFamily: {
      firacode: ['Fira_Code', 'sans-serif'],
      lucida: ['Lucida_Console'],
      w95fa: ['w95fa', 'sans-serif'],
    },
  },
};
export const variants = [];
export const plugins = [];
