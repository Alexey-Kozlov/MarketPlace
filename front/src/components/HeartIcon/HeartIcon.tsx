import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
    LikeWrapper,
} from './styled';

interface IProps {
    isFilled: boolean;
}

export default function HeartIcon({ isFilled }: IProps) {
    return (
        <LikeWrapper>
            {isFilled ? (
                <FaHeart size={15} color="red" />
            ) : (
                <FaRegHeart size={15} color="red" />
            )}
        </LikeWrapper>
    )
}
