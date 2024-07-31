import { render, screen } from '@/lib/test-utils/customReactTestingLibrary'
import { DSText } from '../Text'

describe('DSText component', () => {
  it('renders text correctly with default props', () => {
    render(<DSText variant="fluid-paragraph-400">Hello, paragraph!</DSText>)
    const textElement = screen.getByText('Hello, paragraph!')
    expect(textElement).toBeInTheDocument()
    expect(textElement.tagName).toBe('P')
  })

  it('renders text correctly with custom props', () => {
    render(
      <DSText as="h2" variant="fluid-paragraph-400">
        Hello, custom paragraph!
      </DSText>,
    )
    const textElement = screen.getByText('Hello, custom paragraph!')
    expect(textElement).toBeInTheDocument()
    expect(textElement.tagName).toBe('H2')
  })
})
