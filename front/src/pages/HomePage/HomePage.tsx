import { Helmet } from "react-helmet";
import { TestDiv } from './styled';

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Главная</title>
            </Helmet>
            <TestDiv />
        </>
    )
}
