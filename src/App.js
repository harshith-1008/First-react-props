// import './App.css';
import Navbar from "./Navbar"
import Content from "./Content"
import Footer from "./Footer"
import Categories from "./Categories"
import Data from "./Data"

function App() {
    const cards = Data.map(item => {
        return(
            <Categories 
                img={item.img}
                title={item.title}
            />
        )
    })
  return (
    <div className="App">
        <Navbar />
        <Content />
        <section className="flex flex-row flex-wrap mr-40 ml-40 mb-10 w-auto">
            {cards}
        </section>
        <Footer />
    </div>
  );
}

export default App;
