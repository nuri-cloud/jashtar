import "./App.scss";
import { Footer } from "../widgets/Footer/ui/Footer";
import { Routing } from "./router";
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
