import React from "react";
import AboutUs from '../components/AboutUs'
import Features from '../components/Features'
import Work from "../components/work";
import Pricing from '../components/Pricing'
import Application from '../components/Application'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from "./Footer";


const Layout = ({ children }) => {
    return (
        <React.Fragment>
            {children}
            <AboutUs />
            <Features />
            <Work />
            <Pricing />
            {/* <Application /> */}
            <Team />
            <Contact />
            <Footer />
        </React.Fragment>
    )
}

export default Layout;