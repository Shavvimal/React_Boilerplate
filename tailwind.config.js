module.exports = {
  purge: {
    enabled: true,
    // enabled: process.env == "production"
    content: [
      './src/**/*.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
