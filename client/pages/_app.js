import {UserProvider} from '../context/index.js'
import "../public/css/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from '../components/Nav'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'antd/dist/antd.css'
function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>

      <Nav/>
      <ToastContainer/>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp;