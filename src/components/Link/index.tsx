import NextLink from 'next/link'

type Props = {
  children: string
  href: string
}

export default function Link({ children, href, ...props }: Props) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a {...props}>{children}</a>
    </NextLink>
  )
}
