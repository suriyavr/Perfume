import Navbar from './components/NavBar';
import Search from './components/Search';
import Products from './components/Product';
import About from './components/About';
import Footer from './components/Footer';

function App(){
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Products></Products>
            <About></About>
            <Footer></Footer>
        </div>
    )
}

export default App;