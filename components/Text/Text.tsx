import { fontFamilies, typographyStyles } from '@/components/Text/typographyStyles'
import styled from 'styled-components'

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

type HTMLTextElement = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 's'
type TextAlignType = 'left' | 'center' | 'right' | 'justify' | 'inherit'
type TextDecorationType = 'overline' | 'line-through' | 'underline' | 'underline overline'

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

type TextProps = {
  as?: HTMLTextElement
  variant: TextVariantType
  colour?: TextColourType
  weight?: FontFamilyType
  textDecoration?: TextDecorationType
  align?: TextAlignType
  testId?: string
  children: React.ReactNode
}

export const DSText = ({
  as = 'p',
  colour = 'primary',
  align = 'inherit',
  variant,
  weight,
  textDecoration,
  children,
  testId,
  ...props
}: TextProps) => {
  return (
    <StyledTextElement
      as={as}
      $variant={variant}
      $colour={colour}
      $weight={weight}
      $align={align}
      $textDecoration={textDecoration}
      data-testid={testId}
      {...props}
    >
      {children}
    </StyledTextElement>
  )
}

export const DSTextStrong = ({
  as = 'p',
  colour = 'primary',
  align = 'inherit',
  variant,
  weight,
  textDecoration,
  children,
  ...props
}: TextProps) => {
  return (
    <StyledTextElement
      as={as}
      $variant={variant}
      $colour={colour}
      $weight={weight}
      $align={align}
      $textDecoration={textDecoration}
      {...props}
    >
      <strong>{children}</strong>
    </StyledTextElement>
  )
}

export const DSTextEm = ({
  as = 'p',
  colour = 'primary',
  align = 'inherit',
  variant,
  weight,
  textDecoration,
  children,
  ...props
}: TextProps) => {
  return (
    <StyledTextElement
      as={as}
      $variant={variant}
      $colour={colour}
      $weight={weight}
      $align={align}
      $textDecoration={textDecoration}
      {...props}
    >
      <em>{children}</em>
    </StyledTextElement>
  )
}
