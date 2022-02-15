import { styled } from 'stitches.config'

export const Input = styled('input', {
  position: 'relative',
  height: '2.5rem',
  width: '100%',
  padding: '$2',
  border: '2px solid $gray7',
  borderRadius: '4px',
  transition: 'border-color 0.2s ease-in-out',
  outlineOffset: '2px',
  '&:hover': {
    borderColor: '$gray8'
  },
  '&:focus': {
    borderColor: '$purple9',
    outline: 'none'
  }
})

export const InputLabel = styled('label', {
  display: 'block',
  marginBottom: '$2',
  color: '$hiContrast',
  fontWeight: '600'
})
