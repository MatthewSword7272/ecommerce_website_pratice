import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Products from "./components/Products"
import TopProducts from "./components/TopProducts"
import Banner from "./components/Banner"
import Footer from "./components/Footer"

function App() {
    return (
        <div className={"bg-white dark:bg-gray-900 dark:text-white duration-200"}>
            <NavBar />
            <Hero />
            <Products />
            <TopProducts />
            <Banner />
            <Footer />
        </div>
    )
}

export default App
