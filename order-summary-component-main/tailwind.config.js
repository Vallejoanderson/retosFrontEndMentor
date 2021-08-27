module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      redhad: ['Red Hat Display'],
    },
    extend: {
      backgroundImage: (theme) => ({
          'top-pattern': "url('images/pattern-background-desktop.svg')",
          'top-pattern-mb': "url('images/pattern-background-mobile.svg')",
        }),

      colors: {
        paleblue: 'hsl(225, 100%, 94%)',
        brightblue: 'hsl(245, 75%, 52%)',
        desaturatedblue: 'hsl(224, 23%, 55%)',
        darkblue: 'hsl(223, 47%, 23%)',
        white: 'hsl(225, 100%, 98%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
