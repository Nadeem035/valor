import React from 'react'
import { Route, Routes } from "react-router-dom";
// routes config
import routes from '../Routes';

const Content = () => {
    return (
        <>
            <Routes>
                {routes.map((route, idx) => {
                    return (
                        route.element && (
                            <Route 
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={<route.element />}
                            />
                        )
                    )
                })}
            </Routes>
        </>
    )
}

export default React.memo(Content)
