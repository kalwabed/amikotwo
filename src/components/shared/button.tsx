import { styled } from 'stitches.config'

const Button = styled('button', {
  display: 'inline-flex',
  appearance: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2.5rem',
  width: 'auto',
  padding: '$2',
  userSelect: 'none',
  lineHeight: '1.2',
  outline: 'transparent solid 2px',
  outlineOffset: '2px',
  borderRadius: '5px',
  minWidth: '2.5rem',
  verticalAlign: 'middle',
  color: '$hiContrast',
  backgroundColor: 'White',
  border: 'Black 3px solid',
  fontSize: '$base',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-out',
  '&:hover': {
    backgroundColor: '$sky4'
  },
  '&:focus': {
    backgroundColor: '$sky5'
  },
  variants: {
    isFullWidth: {
      true: {
        width: '100%'
      },
      false: {
        width: 'auto'
      }
    },
    isLoading: {
      true: {
        backgroundColor: '$sky7',
        '&:hover': {
          backgroundColor: '$sky7'
        },
        '&:focus': {
          backgroundColor: '$sky7'
        }
      },
      false: {}
    }
  }
})

export default Button
