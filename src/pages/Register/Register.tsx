import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/input'
import { yupResolver } from '@hookform/resolvers/yup'

import { schema, Schema } from 'src/utils/rules'

type FormData = Schema

// interface FormData {
//   email: string
//   password: string
//   confirm_password: string
// }

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  // const rules = getRules(getValues)

  const onSubmit = handleSubmit(
    (data) => {
      console.log(data)
    },
    () => {
      const passWord = getValues('password')
      console.log('password>>>', passWord)
    }
  )
  // console.log('check Error>>>', errors)

  const bg = '/public/Img/LoginRegister/Bg-login-register.png'
  return (
    <div className=' bg-orange'>
      <div
        className='container flex items-center'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '600px',
          width: '1040px'
        }}
      >
        <div className='ml-auto   grid max-w-7xl grid-cols-1 lg:grid-cols-5 '>
          <div className=' lg:col-span-2 lg:col-start-4'>
            <form
              className='bg-white p-10 shadow-sm'
              onSubmit={(data) => {
                onSubmit(data)
              }}
              noValidate
            >
              <div className='text-2xl'>Đăng Ký</div>

              <Input
                name='email'
                clasName='mt-8'
                placeholder='Email'
                register={register}
                type='email'
                errorMEssage={errors.email?.message}
              />
              <Input
                name='password'
                clasName='mt-2'
                placeholder='password'
                register={register}
                type='password'
                errorMEssage={errors.password?.message}
              />
              <Input
                name='confirm_password'
                clasName='mt-2'
                placeholder='confirm_password'
                register={register}
                type='password'
                errorMEssage={errors.confirm_password?.message}
              />
              {/* <div className='mt-8'>
                <input
                  placeholder='email'
                  type='email'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  {...register('email', rules.email)}
                />
                <div className=' mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.email?.message}</div>
              </div> */}
              {/* <div className='mt-2'>
                <input
                  placeholder='password'
                  type='password'
                  autoComplete='on'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  {...register('password', rules.password)}
                />
                <div className=' mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.password?.message}</div>
              </div> */}
              {/* <div className='mt-2'>
                <input
                  placeholder='confirm_password'
                  type='password'
                  autoComplete='on'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  {...register('confirm_password', rules.confirm_password)}
                />
                <div className=' mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.confirm_password?.message}</div>
              </div> */}
              <div className='mt-2'>
                <button
                  type='submit'
                  className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'
                >
                  Đăng Ký
                </button>
              </div>
              <div className='mt-8 '>
                <div className='flex items-center justify-center'>
                  <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                  <Link className='ml-2 text-red-400' to='/login'>
                    Đăng Nhập
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
