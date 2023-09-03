import { ComponentProps } from '@stitches/react';
import React from 'react';
import { styles } from './styles';
export declare const Button: React.FC<ComponentProps<typeof styles.Wrapper> & {
    icon?: (props: {
        className: string;
    }) => JSX.Element;
    onDisabledClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    loading?: boolean;
}>;
export default Button;
