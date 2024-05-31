import { lazy } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { paths, checkPathMatch } from './helpers';

const ProductDetailsPage = lazy(() => import('pages/ProductDetailsPage'));

const HomePage = lazy(() => import('pages/HomePage'));

export default function PublicRoutes() {
    const location = useLocation();
    const isMatch = checkPathMatch(location.pathname, paths);
    return (
        <Routes>
            <Route path={paths.home} element={<HomePage />} />
            <Route path={paths.productDetails} element={<ProductDetailsPage />} />
            <Route path='*' element={!isMatch ? <Navigate to={paths.home} /> : null} />
        </Routes>
    )
}
