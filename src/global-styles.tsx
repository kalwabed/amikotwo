import { globalCss } from 'stitches.config'

const globalStyles = globalCss({
  '*,::before,::after': {
    boxSizing: 'border-box'
  },
  html: {
    lineHeight: '1.15',
    '-webkit-text-size-adjust': '100%',
    '-moz-tab-size': 4,
    tabSize: 4,
    height: '100%'
  },
  body: {
    margin: 0,
    height: '100%',
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  },
  '#__next': {
    height: '100%',
    isolation: 'isolate'
  },
  hr: {
    height: 0,
    color: 'inherit'
  },
  'abbr[title]': {
    textDecoration: 'underline dotted'
  },
  'b,strong': {
    fontWeight: 'bolder'
  },
  'code,kbd,samp,pre': {
    fontFamily: "ui-monospace, SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace",
    fontSize: '1em'
  },
  small: {
    fontSize: '80%'
  },
  'sub,sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline'
  },
  sub: {
    bottom: '-0.25em'
  },
  sup: {
    top: '-0.5em'
  },
  table: {
    textIndent: 0,
    borderColor: 'inherit'
  },
  'button,input,optgroup,select,textarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: 0
  },
  'button,input': {
    textTransform: 'none'
  },
  'button,[type="button"],[type="reset"],[type="submit"]': {
    '-webkit-appearance': 'button'
  },
  '::-moz-focus-inner': {
    padding: 0,
    borderStyle: 'none'
  },
  ':-moz-focusring': {
    outline: '1px dotted ButtonText'
  },
  ':-moz-ui-invalid': {
    boxShadow: 'none'
  },
  legend: {
    padding: 0
  },
  progress: {
    verticalAlign: 'baseline'
  },
  '::-webkit-inner-spin-button,::-webkit-outer-spin-button': {
    height: 'auto'
  },
  '[type="search"]': {
    '-webkit-appearance': 'textfield',
    outlineOffset: '-2px'
  },
  '::-webkit-search-decoration': {
    '-webkit-appearance': 'none'
  },
  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button',
    font: 'inherit'
  },
  summary: {
    display: 'list-item'
  }
})

export default globalStyles
