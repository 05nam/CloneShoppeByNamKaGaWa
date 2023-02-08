import { schema, Schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { login } from 'src/apis/auth.api'
import { ResponsiveApis } from 'src/types/untils.type'
import { isAxiosUnprocessableEntyError } from 'src/utils/checkError'
import Input from 'src/components/input'

type FormData = Omit<Schema, 'confirm_password'>
const schemaLogin = schema.omit(['confirm_password'])
export default function Login() {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schemaLogin)
  })
  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => login(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntyError<ResponsiveApis<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError?.email) {
            setError('email', {
              message: formError.email,
              type: 'sever'
            })
          }
          if (formError?.password) {
            setError('password', {
              message: formError.password,
              type: 'sever'
            })
          }
        }
      }
    })
  })

  const bg = '/public/Img/LoginRegister/Bg-login-register.png'
  return (
    <div className='bg-orange'>
      <div
        className='container flex items-center'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          margin: '0 auto',
          minHeight: '600px',
          width: '1040px'
        }}
      >
        <div className='  ml-auto   grid max-w-7xl grid-cols-1 lg:grid-cols-5 '>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form
              className=' bg-white p-10 shadow-sm'
              onSubmit={(data) => {
                onSubmit(data)
              }}
              noValidate
            >
              <div className='text-2xl'>Đăng Nhập</div>
              {/* <div className='mt-8'>
                <input
                  placeholder='email'
                  type='email'
                  name='email'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                />
              </div> */}
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
              {/* <div className='mt-3'>
                <input
                  placeholder='password'
                  type='password'
                  name='password'
                  autoComplete='on'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                />
              </div> */}

              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'
                >
                  Đăng Nhập
                </button>
              </div>
              <div className='mt-8 '>
                <div className='flex items-center justify-center'>
                  <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                  <Link className='ml-2 text-red-400' to='/register'>
                    Đăng Ký
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
