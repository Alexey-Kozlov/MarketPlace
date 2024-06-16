import { PageWrapper } from "App.styled";
import { Helmet } from "react-helmet";
import { ProductGroup, ProductGroupContainer } from "./styled";
import { dummyProducts } from "./dummyProducts";
import ProductCard from "blocks/ProductCard";


export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Главная</title>
            </Helmet>
            <PageWrapper>
                <ProductGroup>
                    <h2>Рекомендуемые товары</h2>
                    <ProductGroupContainer>
                        {dummyProducts.map((item, index) => (
                            <ProductCard {...item} key={item.id} />
                        ))}
                    </ProductGroupContainer>
                </ProductGroup>
            </PageWrapper>


        </>
    )
}
