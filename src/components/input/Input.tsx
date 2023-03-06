import { InputHTMLAttributes } from 'react'
import { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMEssage?: string
  classNameInput?: string
  classNAmeError?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function Input({
  className,
  type,
  errorMEssage,
  placeholder,
  name,
  register,
  rules,
  classNameInput = 'w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm',
  classNAmeError = ' mt-1 min-h-[1.25rem] text-sm text-red-600'
}: Props) {
  const registerResult = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input placeholder={placeholder} type={type} className={classNameInput} {...registerResult} />
      <div className={classNAmeError}>{errorMEssage}</div>
    </div>
  )
}
