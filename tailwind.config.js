/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        'helvect': ['helvect']
      },
      borderWidth: {
        '1': '0.8px'
      },
      padding: {
        '1.5': '7px'
      },
      height: {
        '25': '99px'
      },
      screens: {
        md2: {"max": "850px"},
        menu: {"max": "800px"},
        menuOpp: "801px"
      },
      boxShadow: {
        "norm": "0px 0px 4px 0px #0000002b",
        "rewards": "0px 4.5px 0px 0px #00000017",
        "currentNav": "inset 0 -6px #006241"
      },
      backgroundImage: {
        "heroImgDesk": 'url("./src/assets/images/xl-hero-desktop_2021.png")',
        "heroImgMob": 'url("./src/assets/images/hero-mobile_2021.jpg")',
        "bg-gr": "radial-gradient(at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      },
      colors: {
        "light-text": "#fff",
        "dark-text": "hsl(229, 25%, 31%)",
        "score-text": "hsl(229, 64%, 46%)",
        "outline": "hsl(217, 16%, 45%)",
        "bg-grade-1": "hsl(214, 47%, 23%)",
        "bg-grade-2": "hsl(237, 49%, 15%)",
        "scissors-1": "hsl(39, 89%, 49%)",
        "scissors-2": "hsl(40, 84%, 53%)",
        "paper-1": "hsl(230, 89%, 62%)",
        "paper-2": "hsl(230, 89%, 65%)",
        "rock-1": "hsl(349, 71%, 52%)",
        "rock-2": "hsl(349, 70%, 56%)",
      },
    },
  },
  plugins: [],
}

