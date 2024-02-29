import { Routes, Route } from 'react-router-dom'

import { MoviePreviewNote } from '../pages/MoviePreview'
import { CreateMovie } from '../pages/CreateMovie'
import { Profile } from '../pages/Profile'
import { Home } from '../pages/Home'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/newmovie" element={<CreateMovie></CreateMovie>}></Route>
            <Route path="/preview/:id" element={<MoviePreviewNote></MoviePreviewNote>}></Route>
        </Routes>
    )
}
