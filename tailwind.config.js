module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
        primary:"#0FCFEC",
        secondary:"#19D3AE",
        accent:"#3A4256",
        "neutral": "#221B22",
        "base-100": "#F1EEF2",
        "info": "#78B1ED",
        "success": "#16A76D",
        "warning": "#F98F24",
        "error": "#F64652",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
