import colors from 'const/colors';
import React, { ReactNode } from 'react'
import styled from 'styled-components';

interface IButtonProps {
    type?: 'primary' | 'secondary' | 'ghost';
    children?: ReactNode;
    block?: boolean;
    disabled?: boolean;
    onClick?: (e: any) => void;
}

export const Button = styled(({ type = 'primary', children, block = false,
    onClick = () => { }, disabled, ...props }: IButtonProps) => {
    return (<button
        {...props}
        type='button'
        onClick={!disabled ? onClick : () => { }}>
        {children}
    </button>
    )
})`
    user-select: none;
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    width: ${({ block }) => block ? 'center' : 'initial'};
    justify-content: ${({ block }) => block ? 'center' : 'initial'};
    font-size: 14px;
    font-weight: 500;
    padding: 10px 22px;
    letter-spacing: 0.36px;
    border: 1px solid ${({ type }) => type === 'ghost' ? colors.primary : 'transparent'};
    background-color: ${({ type, disabled }) => {
        if (disabled) return '#c2c2c2';
        switch (type) {
            case 'primary': return colors.primary;
            case 'secondary': return colors.secondary;
            case 'ghost': return 'transparent';
            default: return colors.primary;
        }
    }};
    color: ${({ type }) => {
        switch (type) {
            case 'primary': return '#fff';
            case 'secondary': return '#fff'
            case 'ghost': return colors.primary;
            default: return '#fff';
        }
    }};
`;
