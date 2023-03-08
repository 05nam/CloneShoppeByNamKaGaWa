import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className=' bg:white overflow-hidden  rounded-sm shadow transition-transform duration-100 hover:translate-y-[-0.625rem]  hover:shadow-md '>
        <div className=' relative w-full pt-[100%]'>
          <img
            src='https://cf.shopee.vn/file/7e9c28e94eab9daac982991685585f78_tn'
            alt=''
            className=' absolute top-0 left-0 h-full w-full bg-white object-cover'
          />
        </div>
        <div className=' overflow-hidden bg-white p-2'>
          <div className=' trun min-h-[2.5rem] text-sm line-clamp-2'>
            Áo Khoác Blazer Nam phối thân họa tiết phong cách Hàn Quốc NTC A023
          </div>
          <div className=' mt-3 flex items-center'>
            <div className=' max-w-[50%] truncate text-gray-500 line-through'>₫3.390.000</div>
            <div className=' ml-1 truncate text-orange '>
              <span className=' text-sm'>₫</span>
              <span> 1.356.000</span>
            </div>
          </div>
          <div className=' mt-3 flex items-center justify-end'>
            <div className=' flex items-center'>
              <div className=' relative'>
                <div className=' absolute top-0 left-0 h-full overflow-hidden' style={{ width: '50%' }}>
                  <svg
                    enableBackground='new 0 0 15 15'
                    viewBox='0 0 15 15'
                    x={0}
                    y={0}
                    className=' h-3 w-3 fill-yellow-300 text-yellow-300'
                  >
                    <polygon
                      points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeMiterlimit={10}
                    />
                  </svg>
                </div>
                <svg
                  enableBackground='new 0 0 15 15'
                  viewBox='0 0 15 15'
                  x={0}
                  y={0}
                  className=' h-3 w-3 fill-current text-gray-600 '
                >
                  <polygon
                    points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeMiterlimit={10}
                  />
                </svg>
              </div>
              <div className=' ml-2 text-sm'>
                <span>5.66k</span>
                <span className=' ml-1'>Đã bán</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
