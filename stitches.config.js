import { createStitches } from '@stitches/react'
import { gray, purple, sky, yellow } from '@radix-ui/colors'

export const { getCssText, css, globalCss, styled, theme, keyframes } = createStitches({
  prefix: 'amikotwo',
  theme: {
    colors: {
      hiContrast: gray.gray12,
      loContrast: gray.gray11,

      ...gray,
      ...purple,
      ...sky,
      ...yellow
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
    lineHeights: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    fonts: {
      body: '-apple-system, BlinkMacSystemFont, InterVariable, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;'
    },
    radii: {
      none: '0',
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.5rem',
      full: '9999px'
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    },
    space: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem'
    },
    borderWidths: {
      light: '1px',
      normal: '2px',
      thick: '4px'
    },
    zIndices: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      80: 80,
      90: 90
    },
    transitions: {
      fast: '0.2s',
      normal: '0.4s',
      slow: '0.6s',
      slowest: '0.8s'
    }
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)'
  },
  utils: {
    // Abbreviated padding properties
    p: value => ({
      padding: value
    }),
    pt: value => ({
      paddingTop: value
    }),
    pr: value => ({
      paddingRight: value
    }),
    pb: value => ({
      paddingBottom: value
    }),
    pl: value => ({
      paddingLeft: value
    }),
    px: value => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: value => ({
      paddingTop: value,
      paddingBottom: value
    }),
    // Abbreviated margin properties
    m: value => ({
      margin: value
    }),
    mt: value => ({
      marginTop: value
    }),
    mr: value => ({
      marginRight: value
    }),
    mb: value => ({
      marginBottom: value
    }),
    ml: value => ({
      marginLeft: value
    }),
    mx: value => ({
      marginLeft: value,
      marginRight: value
    }),
    my: value => ({
      marginTop: value,
      marginBottom: value
    }),
    bg: value => ({
      background: value
    }),
    bgBlur: value => ({
      bf: 'saturate(180%) blur(10px)',
      bg: `${value}66`
    }),
    bgColor: value => ({
      backgroundColor: value
    }),
    bgClip: value => ({
      WebkitBackgroundClip: value,
      backgroundClip: value
    }),
    rounded: value => ({
      borderRadius: value
    }),
    shadow: value => ({
      boxShadow: value
    }),
    userSelect: value => ({
      WebkitUserSelect: value,
      userSelect: value
    }),
    w: value => ({ width: value }),
    h: value => ({ height: value }),
    minW: value => ({ minWidth: value }),
    maxW: value => ({
      maxWidth: value
    }),
    minH: value => ({
      minHeight: value
    }),
    maxH: value => ({
      maxHeight: value
    }),
    appearance: value => ({
      WebkitAppearance: value,
      appearance: value
    })
  }
})
