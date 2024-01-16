import Navbar from "./components/Navbar";
import HeroSection from "./components/MainSection";
import ImproveSkills from "./components/ImproveSkills";
import QouteSection from "./components/QuoteSection";
import ChiefSession from "./components/ChiefSession";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="container main">
      <HeroSection/>
      <ImproveSkills/>
      <QouteSection/>
      <ChiefSession/>
     </div>
    </div>
  );
}

export default App;
