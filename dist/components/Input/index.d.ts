import React from 'react';
declare type InputProps = Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'> & {
    icon?: (props: {
        width: string;
        flexShrink: number;
    }) => JSX.Element;
    errorMessage?: string;
};
export declare const Input: React.FC<InputProps>;
export declare const FInput: React.FC<InputProps & {
    name: string;
    showErrorMessage?: 'always' | 'dirty';
}>;
export default Input;
