import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'
import { faCheck } from '@fortawesome/pro-regular-svg-icons'

test('renders an Icon if provided an icon', () => {
  render(<Button icon={faCheck} />)

  expect(screen.getByLabelText(faCheck.iconName)).toBeInTheDocument()
})

test('renders given children', () => {
  const childrenTestId = 'childrenTest'

  render(
    <Button>
      <div data-testid={childrenTestId} />
    </Button>
  )

  expect(screen.getByTestId(childrenTestId)).toBeInTheDocument()
})

test('fires given onClick when clicked', () => {
  const onClick = jest.fn()

  render(<Button onClick={onClick} />)

  userEvent.click(screen.getByRole('button'))

  expect(onClick.mock.calls).toHaveLength(1)
})
