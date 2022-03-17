import { Navigate, Route, Routes } from "react-router-dom"
import AgregarProducto from "../Components/crud/AgregarProducto"

export const DashboardRoutes = () => {
    return (
        <>
         <Routes>
            <Route path="/" element={<AgregarProducto  />} />
            <Route path='*' element={<Navigate to="/"/>}/>
         </Routes>
        </>
    )
}