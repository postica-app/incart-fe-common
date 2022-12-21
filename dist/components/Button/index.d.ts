import { ComponentProps } from '@stitches/react';
import React from 'react';
import { styles } from './styles';
export declare const Button: React.FC<ComponentProps<typeof styles.Wrapper> & {
    icon?: (props: React.CSSProperties) => JSX.Element;
}>;
export default Button;
