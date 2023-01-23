import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routers from "./routers/Routers";
function App() {
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
