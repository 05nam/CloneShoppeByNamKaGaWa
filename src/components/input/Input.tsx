import { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  clasName: string
  type: React.HTMLInputTypeAttribute
  errorMEssage?: string
  placeholder?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function Input({ clasName, type, errorMEssage, placeholder, name, register, rules }: Props) {
  return (
    <div className={clasName}>
      <input
        placeholder={placeholder}
        type={type}
        className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
        {...register(name, rules)}
      />
      <div className=' mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorMEssage}</div>
    </div>
  )
}
