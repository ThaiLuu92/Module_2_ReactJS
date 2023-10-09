import App from "../App";
import About from "../Component/About";
import Clients from "../Component/Clients";
import Contact from "../Component/Contact";
import Home from "../Component/Home";
import PortfolioGrid from "../Component/PortfolioGrid";
import Services from "../Component/Services";
import Team from "../Component/Team";

export const publicRouter = [
    {
        path: "/",
        element: <Home />,
        title: "Home"
    },
    {
        path: "/services",
        element: <Services />,
        title: "Services"
    },
    {
        path: "/portfolio-grid",
        element: <PortfolioGrid />,
        title: "PortfolioGrid"
    },
    {
        path: "/about",
        element: <About />,
        title: "About"
    },
    {
        path: "/team",
        element: <Team />,
        title: "Team"
    },
    {
        path: "/clients",
        element: <Clients />,
        title: "Clients"
    },
    {
        path: "/contact",
        element: <Contact />,
        title: "Contact"
    },
]
