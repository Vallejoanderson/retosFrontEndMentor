module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      redhat: ['Red Hat Display'],
    },
    extend: {
      backgroundImage: (theme) => ({
          'top-pattern': "url('/images/pattern-background-desktop.svg')",
          'top-pattern-mb': "url('/images/pattern-background-mobile.svg')",
        }),
      colors: {
        paleblue: 
        {
          100: 'hsla(225, 100%, 94%, .4)',
          200: 'hsl(225, 100%, 94%)',
        },
        brightblue: 'hsl(245, 75%, 52%)',
        desaturatedblue: 'hsl(224, 23%, 55%)',
        darkblue: 'hsl(223, 47%, 23%)',
        white: 'hsl(225, 100%, 98%)',
        hoverblue: 'hsla(245, 75%, 52%, .6)',
      },
      boxShadow: {
        sm: '0 1px 2px 0 hsla(245, 75%, 52%, .3)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px hsla(245, 75%, 52%, .4), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px hsla(245, 75%, 52%, .4), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px hsla(245, 75%, 52%, .4), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px hsla(245, 75%, 52%, .4)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
