import { ComponentProps } from '@stitches/react';
import { styles } from './styles';
declare type CheckboxProps = ComponentProps<(typeof styles)['Box']> & {
    children: JSX.Element;
};
export declare const Checkbox: React.FC<CheckboxProps>;
export declare const FCheckbox: React.FC<CheckboxProps & {
    name: string;
}>;
export {};
