import { Helmet } from "react-helmet"
import Header from "./components/Header/Header"
import Categoríes from "./components/Categories/Categoríes"


function App() {

  return (
    <>
      
        <Helmet>
          <meta charSet="utf-8" />
          <title>Holis</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Header />
       <Categoríes />
        {/* <Carousel /> */}
      </>
  )
}

export default App
