import classNames from 'classnames'
import type { FC, HTMLProps, ReactNode } from 'react'

interface Props extends Pick<HTMLProps<HTMLDivElement>, 'className'> {
  children: ReactNode
}

const DialogFooter: FC<Props> = ({ children, className }) => {
  return <div className={classNames('flex-shrink-0 pt-2', className)}>{children}</div>
}

export { DialogFooter }
