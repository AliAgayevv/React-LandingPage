import Features from "./components/Features";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar/index"
import AboutUs from "./components/About Us/index"
import OurServices from "./components/Our Services/index";
import Gallery from "./components/Gallery/index"
import ClientsFeedback from "./components/Clients Feedback";
import MeetTeam from "./components/Meet Team";

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
      <MeetTeam />
    </>
  )
}

export default App;
