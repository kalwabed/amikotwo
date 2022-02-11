import { createStitches } from '@stitches/react'
import { gray, purple, sky, yellow } from '@radix-ui/colors'

export const { config, createTheme, css, getCssText, globalCss, styled, theme } = createStitches({
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
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      8: '32px'
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      8: '32px'
    },
    fontSizes: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px'
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    }
  },
  utils: {
    marginX: value => ({
      marginLeft: value,
      marginRight: value
    }),
    marginY: value => ({
      marginTop: value,
      marginBottom: value
    }),
    paddingX: value => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: value => ({
      paddingTop: value,
      paddingBottom: value
    })
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)'
  }
})
