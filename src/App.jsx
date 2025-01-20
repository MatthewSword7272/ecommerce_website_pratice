import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Products from "./components/Products"
import TopProducts from "./components/TopProducts"

function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Products />
            <TopProducts />
        </div>
    )
}

export default App
