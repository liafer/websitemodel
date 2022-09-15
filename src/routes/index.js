import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/websitemodel" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}