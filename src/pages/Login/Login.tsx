import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function Login() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm()

  // const onSubmit = handleSubmit((data) => {
  //   console.log(data)
  // })
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
            <form className=' bg-white p-10 shadow-sm'>
              <div className='text-2xl'>Đăng Nhập</div>
              <div className='mt-8'>
                <input
                  placeholder='email'
                  type='email'
                  name='email'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                />
              </div>
              <div className='mt-3'>
                <input
                  placeholder='password'
                  type='password'
                  name='password'
                  autoComplete='on'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                />
              </div>
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
