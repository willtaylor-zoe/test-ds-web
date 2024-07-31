import styled from 'styled-components'
import { fontFamilies, typographyStyles } from './TypographyStyles'

export type FontFamilyType = keyof typeof fontFamilies
export type TextVariantType = keyof typeof typographyStyles

// These should match the "colour-text" tokens in colourStyles.ts
export type TextColourType =
  | 'primary'
  | 'primary-inverse'
  | 'secondary'
  | 'secondary-inverse'
  | 'error'
  | 'placeholder'
  | 'link'
  | 'link-hover'
  | 'link-inverse'
  | 'link-inverse-hover'
  | 'link-navigation-bold'
  | 'link-navigation-bold-hover'

type HTMLTextElement =
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 's'
type TextAlignType = 'left' | 'center' | 'right' | 'justify' | 'inherit'
type TextDecorationType =
  | 'overline'
  | 'line-through'
  | 'underline'
  | 'underline overline'

const StyledTextElement = styled.div<{
  $variant: TextVariantType
  $colour: TextColourType
  $weight?: FontFamilyType
  $align?: TextAlignType
  $textDecoration?: TextDecorationType
}>`
  ${({ $variant }) => typographyStyles[$variant]()}
  ${({ $weight }) => $weight && fontFamilies[$weight]()}

  color: ${({ $colour }) => `var(--colour-text-${$colour})`};
  text-align: ${({ $align }) => $align};
  text-decoration: ${({ $textDecoration }) => $textDecoration};
`

interface TextProps {
  as?: HTMLTextElement
  variant: TextVariantType
  colour?: TextColourType
  weight?: FontFamilyType
  textDecoration?: TextDecorationType
  align?: TextAlignType
  testId?: string
  children: React.ReactNode
}

export function DSText({
  as = 'p',
  colour = 'primary',
  align = 'inherit',
  variant,
  weight,
  textDecoration,
  children,
  testId,
  ...props
}: TextProps) {
  return (
    <StyledTextElement
      $align={align}
      $colour={colour}
      $textDecoration={textDecoration}
      $variant={variant}
      $weight={weight}
      as={as}
      data-testid={testId}
      {...props}
    >
      {children}
    </StyledTextElement>
  )
}

export function DSTextStrong({
  as = 'p',
  colour = 'primary',
  align = 'inherit',
  variant,
  weight,
  textDecoration,
  children,
  ...props
}: TextProps) {
  return (
    <StyledTextElement
      $align={align}
      $colour={colour}
      $textDecoration={textDecoration}
      $variant={variant}
      $weight={weight}
      as={as}
      {...props}
    >
      <strong>{children}</strong>
    </StyledTextElement>
  )
}

export function DSTextEm({
  as = 'p',
  colour = 'primary',
  align = 'inherit',
  variant,
  weight,
  textDecoration,
  children,
  ...props
}: TextProps) {
  return (
    <StyledTextElement
      $align={align}
      $colour={colour}
      $textDecoration={textDecoration}
      $variant={variant}
      $weight={weight}
      as={as}
      {...props}
    >
      <em>{children}</em>
    </StyledTextElement>
  )
}
