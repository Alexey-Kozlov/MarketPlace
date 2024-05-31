import HomePage from "pages/HomePage";
import PublicRoutes from "routes/PublicRoutes";
import PrivateRoutes from "routes/PrivateRoutes";
import { Suspense } from "react";

const App = () => {
    return (
        <Suspense fallback={'Загрузка...'}>
            <PublicRoutes />
            <PrivateRoutes />
        </Suspense>
    )
}

export default App;