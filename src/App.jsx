import "./App.css";
import Navbar from "./Navbar";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

function App() {
  return (
    <main>
      <div className="bg-[#6D28D9]">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
      <SectionFour />
    </main>
  );
}

export default App;
