import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Products from "./components/Products"

function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Products />
        </div>
    )
}

export default App
