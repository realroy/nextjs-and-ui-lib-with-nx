import React from 'react'

export interface ButtonProps extends React.PropsWithChildren {}

export default function Button({ children, ...restProps }: ButtonProps) {
  return <button {...restProps}>{children}</button>
}