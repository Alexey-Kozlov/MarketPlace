import styled from "styled-components"
import { Z_INDEX_LEVEL_2, HEADER_HEIGHT } from "const"
import colors from "const/colors"

export const Wrapper = styled.div`
    padding: 14px 20px;
    display: flex;
    align-items: center;
    transform: margin 0.2s ease-out;
    background-color: ${colors.primary};
    height: ${HEADER_HEIGHT}px;
    z-index: ${Z_INDEX_LEVEL_2};
    color: '#fff';
`