module.exports = {
  content: ["./public/*.{html, js}"],
  theme: {        // setting a personal setting for by default
    container: {
      center: true,
      padding: '2rem'
    }
  },
  plugins: [],
}

// This file is necessary for the running of the tailwind css.
// if this file is not made the css rules don't apply to the html file.
// to create this file we should use the command "npm tailwind init"
// then add the link to the folder where all the html files are located.