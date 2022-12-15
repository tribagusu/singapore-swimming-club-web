import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer/Footer"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
