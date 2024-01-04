import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./utils/queryClient"
import "./index.css"

// Kumbh Sans font - Supports weights 100-900
// import '@fontsource-variable/kumbh-sans';

// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Contact from "./pages/Contact"
import MissionNdVission from "./pages/about/MissionNdVission"
import Team from "./pages/about/Team"
import Dashboard from "./pages/dashboard/Dashboard"
import theme from "./utils/theme"
import GHC1 from "./pages/events/GHC1"
import Activity from "./pages/about/Activity"
import ProfilePage from "./pages/dashboard/Profile"
import SettingsPage from "./pages/dashboard/Settings"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about/mission",
    element: <MissionNdVission />,
  },
  {
    path: "/about/team",
    element: <Team />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/profile",
    element: <ProfilePage />,
  },
  {
    path: "/dashboard/settings",
    element: <SettingsPage />,
  },
  {
    path: "/events/ghc1.0",
    element: <GHC1 />,
  },
  {
    path: "/about/activity",
    element: <Activity />,
  },
]);

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} fallbackElement={<App />} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

