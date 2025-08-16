import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ActivitiesPage from "../pages/ActivitiesPage/ui/ActivitiesPage";
import { MovementPages } from "../pages/Movement/ui/MovementPages";
import { BranchNamePages } from "@/pages/BranchName/ui/BranchNamePages";
import { Project } from "@/pages/Project/ui/Project";
import { ProjectNamePages } from "@/pages/ProjectName/ui/ProjectNamePages";

export default function Routing() {
  //   const accessToken = localStorage.getItem("accessToken");

  const PUBLIC_PAGES = [
    { link: "/", page: <MainPage />, id: 1 },
    { link: "/activitiesPage", page: <ActivitiesPage />, id: 2 },
    { link: "/movementpages", page: <MovementPages />, id: 3 },
    { link: "/branchnamepages", page: <BranchNamePages />, id: 4 },
    { link: "/project", page: <Project />, id: 5 },
    { link: "/project/projectnamepages", page: <ProjectNamePages />, id: 6 }, // ✅ Ушундай

    // { link: "/about-motion", page: <AboutUsPage />, id: 2 },

    // { link: "/directions", page: <NewsPage />, id: 3 },
    // { link: "/events", page: <NewsDetailPage />, id: 12 },

    // { link: "/projects", page: <ProductsPage />, id: 4 },
    // { link: "/media", page: <ProductDetailPage />, id: 8 },

    // { link: "/reg-departments", page: <FAQPage />, id: 5 },
    // { link: "/signup", page: <SignUpPage />, id: 6 },
    // { link: "/login", page: <LoginPage />, id: 7 },
  ];

  return (
    <Routes>
      {PUBLIC_PAGES.map((page) => (
        <Route
          path={page.link}
          element={<div>{page.page}</div>}
          key={page.id}
        />
      ))}
    </Routes>
  );
}
