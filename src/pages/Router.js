import React from 'react'
import { Route, Routes } from "react-router-dom"
import Gallery from './Gallery'
import SignIn from './SignIn'

function Router() {
    return (
        <div>
            <Routes>
                <Route ecxat path='/' element={<SignIn />} />
                <Route ecxat path='/Gallery' element={<Gallery />} />
            </Routes>
        </div>
    )
}

export default Router