// Đây là lỗi của yarn. Khi em chạy yarn nó không tạo ra folder node_modules
// Cách fix như anh, em tạo file .yarnrc,yml
// ok a
// Có vẻ cái lỗi này lúc bị lúc không
// Còn dùng npm i thì bình thường không lỗi

// Vậy nha! Em học tiếp đi

import useRouteElements from './useRouteElements'
// sưr dụng hook router
function App() {
  const routeElements = useRouteElements()
  return <div>{routeElements}</div>
}

export default App
