import { type RouteConfig, index , layout, route} from "@react-router/dev/routes";

export default [
    index("./pages/home.jsx"),
    route("about", "./pages/about.tsx"),
    route("dashboard", "./dashboard/dashboardLayout.jsx",[
        index("./dashboard/dashboardHome.jsx")
    ])
] satisfies RouteConfig;
