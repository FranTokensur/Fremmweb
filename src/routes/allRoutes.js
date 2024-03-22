import React   from 'react'
import Layout1 from '../pages/Layout1/layout1';
import Layout2 from '../pages/Layout2/layout2';
import Layout3 from '../pages/Layout3/layout3';
import Layout4 from '../pages/Layout4/layout4';
import Layout5 from '../pages/Layout5/layout5';
import Layout6 from '../pages/Layout6/layout6';


const authProtectedRoutes = [
    // Lauout1
    { path: "/", component: <Layout1/> },
    { path: "/index-1" , component: <Layout1/> },

    // Layout2
    { path:"/index-2", component: <Layout2 /> },

    // Layout3
    { path: "/index-3", component: <Layout3/> },

    // Layout4
    { path: "/index-4", component: <Layout4/> },

    // Layout5
    { path: "/index-5", component: <Layout5/> },

    // Layout6
    { path: "/index-6", component: <Layout6/> },
]

export default authProtectedRoutes;