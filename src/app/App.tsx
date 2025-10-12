import "./App.scss";
import { Footer } from "../widgets/Footer/ui/Footer";
import { Routing } from "./router";
import Header from "@/widgets/Header/Header";
import { useLocation } from "react-router-dom";

function App() {
const location = useLocation();

const hideHeaderFooterRoutes = ["/login", "/register", "/404", "/verify-email", "/forgot-password", "/verify-code", "/profile"];
const showLayout = !hideHeaderFooterRoutes.includes(location.pathname) && !location.pathname.startsWith("/new-password");

  return (
    <>
      <div>
        {showLayout && <Header />}
        <main className="routing">
          <Routing />
        </main>
        {showLayout && <Footer />}
      </div>
    </>
  );
}

export default App;