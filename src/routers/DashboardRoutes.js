import { Navigate, Route, Routes } from "react-router-dom"
import ListArticles from "../components/ListArticles"

export const DashboardRoutes = () => {
    return (
        <>
         <Routes>
            <Route path="/listArticle" element={<ListArticles/>}/>     
            <Route path='*' element={<Navigate to="/"/>}/>
         </Routes>
        </>
    )
}