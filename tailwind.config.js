module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1a0e08',
        roast:    '#3b1e0c',
        caramel:  '#c07a3a',
        cream:    '#f5ede0',
        gold:     '#d4a847',
        muted:    '#7a5c44',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
      }
    }
  },
  plugins: []
}