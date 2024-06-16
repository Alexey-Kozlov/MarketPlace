import { Link } from 'react-router-dom'
import { Button } from 'components/Button'
import { FaRegHeart } from "react-icons/fa";
import {
    Wrapper,
    LikeWrapper,
    Image,
    PriceWrapper,
    PriceRegular,
    PriceRegularWhenDiscounted,
    PriceDiscounted,
    Title,
    Desc
} from './styled';
import { title } from 'process';
import HeartIcon from 'components/HeartIcon';

interface IProductCardProps {
    id: number;
    slug?: string;
    imgSrc?: string;
    priceRegular: number;
    priceDiscounted?: number;
    title: string;
    desc?: string;
    isLiked?: boolean;
    hideLikes?: boolean;
}

export default function ProductCard(props: IProductCardProps) {
    return (
        <Wrapper>
            {!props.hideLikes && (
                <HeartIcon isFilled={false} />
            )}
            <Link to={`/product/${props.slug || props.id}`}>
                <Image src={props.imgSrc} />
            </Link>

            <PriceWrapper>
                {Number.isInteger(props.priceDiscounted) ? <>
                    <PriceDiscounted>{props.priceDiscounted} р.</PriceDiscounted>
                    <PriceRegularWhenDiscounted>{props.priceDiscounted} р.</PriceRegularWhenDiscounted>
                </>
                    : (<PriceRegular>{props.priceRegular} р.</PriceRegular>)}
            </PriceWrapper>

            <Title className='h4'>
                <Link to={`/product/${props.slug || props.id}`}>
                    {title}
                </Link>
            </Title>

            <Desc>{props.desc}</Desc>

            <Button>В корзину</Button>
        </Wrapper>
    )
}
