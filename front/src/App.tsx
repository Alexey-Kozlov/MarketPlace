import PublicRoutes from "routes/PublicRoutes";
import { Suspense } from "react";
import { AppStyles, Footer } from './App.styled';
import Header from "features/Header";

const App = () => {
    return (
        <>
            <AppStyles />
            <Header />
            <Suspense fallback={'Загрузка...'}>
                <PublicRoutes />
            </Suspense>
            <Footer>
                <div>Маркетплейс</div>
            </Footer>
        </>
    )
}

export default App;