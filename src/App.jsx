import Features from "./components/Features";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar/index"
import AboutUs from "./components/About Us/index"
import OurServices from "./components/Our Services/index";
import Gallery from "./components/Gallery/index"
import ClientsFeedback from "./components/Clients Feedback";

function App() {


  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <AboutUs />
      <OurServices />
      <Gallery />
      <ClientsFeedback />
    </>
  )
}

export default App;
