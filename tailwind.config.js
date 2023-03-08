const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      dropShadow: {
        social: '0px 4px 4px rgba(0, 102, 255, 0.25)',
        contactMobTitle: '0.5rem 0.3rem 0 rgba(0, 102, 255, 0.7)',
      },
      boxShadow: {
        'contact': '0 0 0.6rem #0066FF',
        'contact-inner': 'inset 0 0 0.6rem #0066FF',
      },
      spacing: {
        4.5: '1.125rem', // 18px
        5.5: '1.375rem', // 22px
        7.5: '1.875rem', // 30px
        9: '2.25rem', // 36px
        9.5: '2.375rem', // 38px
        10: '2.5rem', // 40px
        12.5: '3.125rem', // 50px
        14.5: '3.625rem', // 58px
        15: '3.75rem', // 60px
        17: '4.25rem', // 68px
        17.5: '4.375rem', // 70px
        18.5: '4.625rem', // 74px
        21.5: '5.375rem', // 86px
        24.5: '6.125rem', // 98px
        25: '6.25rem', // 100px
        26: '6.5rem', // 104px
        30: '7.5rem', // 120px
        32.5: '8.125rem', // 130px
        36.5: '9.125rem', // 146px
        37.5: '9.375rem', // 150px
        41.5: '10.375rem', // 166px
        42: '10.5rem', // 168px
        50: '12.5rem', // 200px
        52.5: '13.125rem', // 210px
        51.25: '12.8125rem', // 205px
        55: '13.75rem', // 220px
        60: '15rem', // 240px
        86: '21.5rem', // 344px
        100: '25rem', // 400px
        105: '26.25rem', // 420px
        167: '41.75rem', // 668px
        215: '53.75rem', // 860px
        218: '54.5rem', // 872px
        241: '60.25rem', // 964px
      },
      fontFamily: {
        lexendDeca: "Lexend Deca",
        blinker: "Blinker",
        'mono': 'Roboto Mono',
        'poppins': 'Poppins'
      },
      fontSize: {
        "thin-m": ["0.625rem", "0.75rem"], //['10px', '12px']
        "thin-m-l": ["0.6875rem", "0.875rem"], //['11px', '14px']
        "thin-l": ["0.75rem", "1rem"], //['12px', '16px']
        "thin-lg": ["0.8125rem", "1.25rem"], //['13px', '20px']
        "xs-h": ["0.875rem", "1rem"], //['14px', '16px']
        "xs-md": ["0.875rem", "1.125rem"], //['14px', '18px']
        "xs-xl": ["0.875rem", "1.25rem"], //['14px', '20px']
        "xs-xl-l": ["0.9375rem", "1.25rem"], //['15px', '20px']
        "lg-xs": ["1rem", "1.5rem"], //['16px', '24px']
        "lg-xs-s": ["1rem", "1.25rem"], //['16px', '20px']
        "lg-s": ["1.125rem", "1.25rem"], //['18px', '20px']
        "lg-md": ["1.125rem", "1.5rem"], //['18px', '24px']
        "lg-l": ["1.125rem", "1.75rem"], //['18px', '28px']
        "base-m": ["1rem", "1.125rem"], //['16px', '18px']
        "9xl": ["7.75rem", "10.25rem"], //['124px', '164px']
        "8xl": ["5rem", "5rem"], //['80px', '80px']
        "7xl-h": ["4.5rem", "5.375rem"], //['72px', '86px']
        "6xl-h": ["4rem", "4.75rem"], //['64px', '76px']
        "6xl-m": ["4rem", "4.75rem"], //['60px', '72px']
        "6xl-mg": ["3.75rem", "3.75rem"], //['60px', '60px']
        "6xl-l": ["4.25rem", "4.5rem"], //['68px', '72px']
        "6xl-lg": ["4.25rem", "5.625rem"], //['68px', '90px']
        "3xl-xs": ["1.9rem", "1.9rem"], //['32px', '40px']
        "3xl-h": ["2rem", "2.5rem"], //['32px', '40px']
        "3xl-h-s": ["2rem", "2rem"], //['32px', '32px']
        '5xl-xs': ["3.5rem", "3.5rem"], //['56px', '56px']
        "5xl-m": ["3.5625rem", "3.75rem"], //['57px', '64px']
        "4xl-h": ["2.25rem", "3.375rem"], //['36px', '54px']
        "4xl-h-xs": ["2.25rem", "2.75rem"], //['36px', '44px']
        "4xl-h-s": ["2.25rem", "2.25rem"], //['36px', '36px']
        "4xl-m": ["2.5rem", "3rem"], //['40px', '48px']
        "4xl-md": ["2.6875rem", "3.25rem"], //['43px', '52px']
        "4xl-md-s": ["2.5rem", "2.625rem"], //['40px', '42px']
        "4xl-md-m": ["2.5rem", "2.75rem"], //['40px', '44px']
        "4xl-l": ["3rem", "3.75rem"], //['48px', '60px']
        "2xl-h": ["1.5rem", "1.75rem"], //['24px', '28px']
        "2xl-l": ["1.5rem", "2.25rem"], //['24px', '36px']
        "2xl-xs": ["1.75rem", "2rem"], //['28px', '32px']
        "2xl-xs-s": ["1.625rem", "2.125rem"], //['26px', '34px']
        "2xl-s": ["1.75rem", "2.625rem"], //['28px', '42px']
        "2xl-sm": ["1.75rem", "2.375rem"], //['28px', '38px']
        "2xl-m": ["1.375rem", "1.75rem"], //['22px', '28px']
        "2xl-m-l": ["1.375rem", "2rem"], //['22px', '32px']
        "2xl-m-s": ["1.375rem", "1.375rem"], //['22px', '32px']
        "2xl-md": ["1.5rem", "2rem"], //['24px', '32px']
        "xl-m": ["1.25rem", "1.375rem"], //['20px', '22px']
        "xl-md": ["1.25rem", "1.5rem"], //['20px', '24px']
        numbers: ["3.5rem", "5.75rem"], //['56px', '92px']
        "numbers-md": ["2.625rem", "2.75rem"], //['42px', '44px']
      },
      maxWidth: {
        mobile: "375px",
        '60': "60rem",
        '75': "75rem",
        lg: "1024px",
        xl: "1280px",
        "8xl": "1440px",
        "13xl": "1920px",
      },
      minHeight: {
        '11': '11rem',
      },
      height: {
        footer: "100px",
        planet: "100px",
      },
      width: {
        footer: "100px",
        planet: "100px",
      },
      rotate: {
        '7': '7deg',
        '2-6': '2.67deg',
      },
      colors: {
        input: "rgba(0, 0, 0, 0.7)",
        button: "rgba(0, 0, 0, 0.8)",
        'main-black': '#0B0B0B',
        'footer-black': '#0A0A0A',
        "line-gray": "#292929",
        "main-blue": "#0066FF",
        "main-gray": "#D1D1D1",
        "middle-gray": "#B1B1B1",
        "footer-gray": "#B5B5B5",
        "lines-primary": "#1C1C1C",
        "lines-gray": "#353535",
        "shadow-gray": "#151516",
        "orange": "#FF6932",
        "gray": "#151515",
        "gray-text": "#ACACAC",
        "blue-hover": "#0066FF",
        "blue-active": "rgba(0, 102, 255, 0.4);",
        "blue-block": "rgba(0, 102, 255, 0.2);",
        "mev-footer-black": "#0B0B0B",
        'overlay-gray': 'rgba(13, 12, 12, 0.8)',
      },
      backgroundImage: {
        footerBg: "url('/images/footerBg.png')",
        footerBgMobile: "url('/images/footerBgMobile.webp')",
        mainBg: "url('/images/background.png')",
        mainBgDark: "url('/images/bg-main-dark.png')",
        mainImage: "url('/images/mainImage.png')",
        shadowMain:"linear-gradient(180deg, rgba(11, 11, 11, 0.8) 0%, rgba(0, 0, 0, 0) 16.22%)",
        shadowMainTop:"linear-gradient(180deg, rgba(0, 0, 0, 0.696) 22.92%, rgba(0, 0, 0, 0.8) 100%, rgba(11, 11, 11, 0.8) 100%);",
        'main-gradient': 'linear-gradient(107.15deg, #333B46 0%, #73655D 100%)',
        testimonialsBackground: "url('/images/testimonials/backround.svg')",
        recognitionBackground: "url('/images/recognitionBackground.svg')",
        testimonialsBackgroundMobile: "url('/images/testimonialsBackground.png')",
        mevFooterBg: "url('/images/mevFooterBg.png')",
      },
      blur: {
        "12px": "12px",
      },
      letterSpacing: {
        "04em": "0.04em;",
        "03em": "0.03em;",
        "02em": "0.02em;",
      },
      padding: {
        '120px': '120px',
      }
    },
    screens: {
      mm: "375px",
      ml: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "1xl": "1320px",
      xxl: "1440px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2200px",
      "5xl": "2500px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      textDecoration: ["active", "focus"],
      fill: ["hover", "focus", "active"],
      backgroundColor: ["group-focus"],
      visibility: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
