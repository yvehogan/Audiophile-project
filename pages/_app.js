import '../styles/globals.css'
import Layout from './components/Layout'
import useCartStore from './components/store/cartStore'


function MyApp({ Component, pageProps }) {
  return (
    <Layout className="">
      <useCartStore>
      <Component {...pageProps} />
      </useCartStore>
    </Layout>
  )
}

export default MyApp
