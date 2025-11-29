import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import MainPage from "../pages/MainPage";
import WelcomePage from "../pages/WelcomePage";
import ProjectPage from "../pages/ProjectPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import ProfilePage from "../pages/ProfilePage";
import SettingPage from "../pages/SettingPage";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: Layout,
        children:[
            {index: true, Component: MainPage},
            {path: '/welcome', Component: WelcomePage},
            {path: '/project', Component: ProjectPage},
            {path: '/blog', Component: BlogPage},
            {path: '/contact', Component: ContactPage},
            {path: '/profile', Component: ProfilePage},
            {path: '/setting', Component: SettingPage},

        ]
        
    }
])
