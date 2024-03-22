import React from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from '../layout/index';
import authProtectedRoutes from './allRoutes';


const Index = () => {
    return (
        <React.Fragment>
                <Routes>
                    <Route>
                        {authProtectedRoutes.map((route, idx) => (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>{route.component}</Layout>
                                }
                                key={idx}
                                exact={true}
                            />
                        ))}
                    </Route>
                </Routes>
        </React.Fragment>
    );
};

export default Index;