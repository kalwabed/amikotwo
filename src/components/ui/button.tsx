import { styled } from 'stitches.config'

const Button = styled('button', {
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'white',
  border: '1px solid $gray7',
  borderRadius: '$md',
  boxShadow: 'none',
  color: '$hiContrast',
  cursor: 'pointer',
  display: 'inline-flex',
  fontSize: '$base',
  fontWeight: '$medium',
  height: '2.5em',
  justifyContent: 'center',
  lineHeight: '$normal',
  padding: 'calc(.5em - 1px) 1em',
  position: 'relative',
  textAlign: 'center',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  verticalAlign: 'top',
  whiteSpace: 'nowrap',
  outline: '0',
  transition: 'all .2s ease-in-out',

  variants: {
    isLoading: {
      true: {
        backgroundColor: '$gray5',
        color: '$gray11',
        borderColor: '$gray7',
        cursor: 'not-allowed',
        '&:hover': {
          backgroundColor: '$gray5',
          borderColor: '$gray7'
        },
        '&:focus': {
          backgroundColor: '$gray5',
          borderColor: '$gray7'
        }
      },
      false: {}
    },
    isFullWidth: {
      true: {
        width: '100%'
      },
      false: {
        width: 'auto'
      }
    },
    variant: {
      solid: {
        backgroundColor: 'inherit',
        borderColor: 'inherit',
        color: 'inherit',

        '&:hover': {
          backgroundColor: 'inherit',
          borderColor: 'inherit'
        },

        '&:focus': {
          backgroundColor: 'inherit',
          borderColor: 'inherit'
        }
      },
      ghost: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none'
      }
    },
    colorScheme: {
      sky: {
        backgroundColor: '$sky4',
        borderColor: '$sky7',
        color: '$sky12',
        '&:hover': {
          backgroundColor: '$sky5',
          borderColor: '$sky8'
        },
        '&:focus': {
          backgroundColor: '$sky6',
          borderColor: '$sky7'
        }
      },
      gray: {
        backgroundColor: '$gray4',
        borderColor: '$gray7',
        color: '$gray12',
        '&:hover': {
          backgroundColor: '$gray5',
          borderColor: '$gray8'
        },
        '&:focus': {
          backgroundColor: '$gray6',
          borderColor: '$gray7'
        }
      },
      yellow: {
        backgroundColor: '$yellow4',
        borderColor: '$yellow7',
        color: '$yellow12',
        '&:hover': {
          backgroundColor: '$yellow5',
          borderColor: '$yellow8'
        },
        '&:focus': {
          backgroundColor: '$yellow6',
          borderColor: '$yellow7'
        }
      }
    },
    size: {
      xs: {
        fontSize: '$xs',
        height: '1.5em',
        padding: 'calc(.25em - 1px) .75em'
      },
      sm: {
        fontSize: '$sm',
        height: '2em',
        padding: 'calc(.5em - 1px) 1em'
      },
      md: {
        fontSize: '$base',
        height: '2.5em',
        padding: 'calc(.75em - 1px) 1.25em'
      }
    }
  },
  compoundVariants: [
    {
      variant: 'ghost',
      colorScheme: 'gray',
      css: {
        backgroundColor: 'transparent',
        border: '0px',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '$gray11'
        },
        '&:focus': {
          border: '1px solid $gray7',
          backgroundColor: 'transparent'
        }
      }
    },
    {
      variant: 'ghost',
      colorScheme: 'sky',
      css: {
        backgroundColor: 'transparent',
        border: '0px',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '$sky11'
        },
        '&:focus': {
          border: '1px solid $sky7',
          backgroundColor: 'transparent'
        }
      }
    }
  ],
  defaultVariants: {
    variant: 'solid',
    colorScheme: 'sky',
    size: 'md'
  }
})

export default Button
