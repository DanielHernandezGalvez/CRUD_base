import { Helmet } from "react-helmet"
import Header from "./components/Header/Header"
import Categoríes from "./components/Categories/Categoríes"
import Spacing from "./components/spacing/Spacing"


function App() {

  return (
    <>
      
        <Helmet>
          <meta charSet="utf-8" />
          <title>Holis</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Header />
        <Spacing />
       <Categoríes />
        {/* <Carousel /> */}
      </>
  )
}

export default App
