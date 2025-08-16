import "./App.scss";
import Routing from "../routing/Routing";
import { Footer } from "../widgets/Footer/ui/Footer";
// import { Footer } from "@/widgets/Footer";
// import { Footer } from "@/widgets/Footer";

function App() {
  return (
    <>
      <div className="app">
        {/* <Header /> */}
        <main className="routing">
          <Routing />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
