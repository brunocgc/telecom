import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }

const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
const variants: Record<string, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
}

const Button = React.forwardRef<HTMLButtonElement, Props>(({ className = '', variant = 'primary', children, ...rest }, ref) => {
  return (
    <button ref={ref} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button
