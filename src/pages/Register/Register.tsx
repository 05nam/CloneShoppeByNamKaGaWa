import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'

import { schema, Schema } from 'src/utils/rules'
import Input from 'src/components/input'
import { registerAccount } from 'src/apis/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntyError } from 'src/utils/checkError'
import { ErrorResponse } from 'src/types/untils.type'
import { useContext } from 'react'
import { AppContext } from 'src/components/contexts/app.Context'
import Button from 'src/components/Button'

type FormData = Schema

export default function Register() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate('/profile')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntyError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
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
              <div className='text-2xl'>????ng K??</div>

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

              <div className='mt-2'>
                <Button
                  isLoading={registerAccountMutation.isLoading}
                  disabled={registerAccountMutation.isLoading}
                  type='submit'
                  className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'
                >
                  ????ng K??
                </Button>
              </div>
              <div className='mt-8 '>
                <div className='flex items-center justify-center'>
                  <span className='text-gray-400'>B???n ???? c?? t??i kho???n?</span>
                  <Link className='ml-2 text-red-400' to='/login'>
                    ????ng Nh???p
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
