import { Helmet } from "react-helmet"
import Header from "./components/Header/Header"
import Carousel from "./components/Carousel/Carousel"


function App() {

  return (
    <>
      
        <Helmet>
          <meta charSet="utf-8" />
          <title>Holis</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Header />
        {/* <Carousel /> */}
      </>
  )
}

export default App
