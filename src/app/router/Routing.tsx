import ActivitiesPage from "@/pages/ActivitiesPage/ui/ActivitiesPage";
import { Allbom } from "@/pages/Allbom/Allbom";
import { BranchNamePages } from "@/pages/BranchName/ui/BranchNamePages";
import DetailView from "@/pages/BrandsMaterials/ui/DetailView/DetailView";
import Main from "@/pages/BrandsMaterials/ui/Main/Main";
import EventsArchivePage from "@/pages/EventsArchivePage/EventsArchivePage";
import Events from "@/pages/EventsPage/Events";
import MainPage from "@/pages/MainPage";
import { MediaPage } from "@/pages/Media/MediaPage";
import { MovementPages } from "@/pages/Movement/ui/MovementPages";
import NameOfTheEvent from "@/pages/NameOfTheEvent/NameOfTheEvent";
import News from "@/pages/News/News";
import NewsPage from "@/pages/NewsPage/NewsPage";
import { VerifyToken } from "@/pages/VerifyToken/VerifyToken";
import { ForgotPassword } from "@/pages/ForgotPassword/ForgotPassword";
import { VerifyCode } from "@/pages/VerifyCode/VerifyCode";
import { NewPassword } from "@/pages/NewPassword/NewPaasord";
import NotFound from "@/pages/NotFound/NotFound";
import { Profile } from "@/pages/PersonalInformation/Profile";
import { PhotoGallry } from "@/pages/Photo/PhotoGallry";
import { Project } from "@/pages/Project/ui/Project";
import { ProjectNamePages } from "@/pages/ProjectName/ui/ProjectNamePages";
import { Register } from "@/pages/Register/Register";
import { SignIn } from "@/pages/SigneIn/SigneIn";
import { Video } from "@/pages/Video/Video";
import { Route, Routes } from "react-router-dom";
import PresidentSale from "@/pages/PresidentSalePage/PresidentSale/PresidentSale";
import DetailOfPresidentSale from "@/pages/PresidentSalePage/DetailOfPresidentSale/DetailOfPresidentSale";

export default function Routing() {
  const PUBLIC_PAGES = [
    { link: "/", page: <MainPage />, id: "home" },
    { link: "/activitiesPage", page: <ActivitiesPage />, id: "activities" },
    { link: "/movementpages", page: <MovementPages />, id: "movement" },
    { link: "/branchnamepages", page: <BranchNamePages />, id: "branches" },

    { link: "/project", page: <Project />, id: "projects" },
    { link: "/project/:id", page: <ProjectNamePages />, id: "projectDetail" },

    { link: "/media", page: <MediaPage />, id: "media" },
    { link: "/photoGallery", page: <PhotoGallry />, id: "photoGallery" },
    { link: "/videoGallery", page: <Video />, id: "videoGallery" },
    { link: "/allbom", page: <Allbom />, id: "allbom" },

    { link: "/register", page: <Register />, id: "register" },
    { link: "/login", page: <SignIn />, id: "login" },
    { link: "/profile", page: <Profile />, id: "profile" },

    { link: "/main", page: <Main />, id: "main" },
    { link: "/detailview/:id", page: <DetailView />, id: "detailViewId" },
    { link: "/detailview", page: <DetailView />, id: "detailView" },

    { link: "/events", page: <Events />, id: "events" },
    { link: "/events/:id", page: <NameOfTheEvent />, id: "eventDetail" },
    { link: "/eventsArchivePage", page: <EventsArchivePage />, id: "eventsArchive" },

    { link: "/news", page: <News />, id: "news" },
    { link: "/news/:id", page: <NewsPage />, id: "newsDetail" },

    { link: "/verify-email", page: <VerifyToken />, id: "verifyEmail" },
    { link: "/forgot-password", page: <ForgotPassword />, id: "forgotPassword" },
    { link: "/verify-code", page: <VerifyCode />, id: "verifyCode" },
    { link: "/new-password/:code", page: <NewPassword />, id: "newPassword" },

    { link: "/nameoftheevent", page: <NameOfTheEvent />, id: "nameOfTheEvent" },

    { link: "/presidentSale", page: <PresidentSale />, id: "presidentSale" },
    { link: "/presidentSaleDetail", page: <DetailOfPresidentSale />, id: "presidentSaleDetail" },

    { link: "*", page: <NotFound />, id: "notFound" },
  ];

  return (
    <Routes>
      {PUBLIC_PAGES.map((p) => (
        <Route path={p.link} element={p.page} key={p.id} />
      ))}
    </Routes>
  );
}
