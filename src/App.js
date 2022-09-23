import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Structure from "./components/Layout/Structure";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Header/>
        <Structure>

          <Routes/>
          
        </Structure>
      <Footer/>  
    </div>
  );
}

export default App;
