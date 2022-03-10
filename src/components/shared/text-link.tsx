import Link from 'next/link'

import { styled } from 'stitches.config'

const AnchorLink = styled('a', {
  color: '$sky11',
  textDecoration: 'none',
  transition: 'color .2s ease-in-out',
  textDecorationColor: '$sky4',
  textUnderlineOffset: '3px',

  '&:hover': {
    textDecoration: 'underline'
  },
  '&:focus': {
    outlineColor: '$sky6',
    outlineOffset: '1px'
  }
})

const TextLink: React.FC<{ href: string; isExternal?: boolean }> = ({ href, children, isExternal }) => {
  if (isExternal) {
    return (
      <AnchorLink href={href} title={String(children)} target="_blank" rel="noopener noreferrer">
        {children}
      </AnchorLink>
    )
  }

  return (
    <Link href={href} passHref>
      <AnchorLink title={String(children)}>{children}</AnchorLink>
    </Link>
  )
}

export default TextLink
