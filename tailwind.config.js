/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        'podcasts': '#E13300',
        'liveEvents': '#7358FF',
        'madeForYou': '#1E3264',
        'newReleases': '#E8115B',
      },
    },
  },
  plugins: [],
}

