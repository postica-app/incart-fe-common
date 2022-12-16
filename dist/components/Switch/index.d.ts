import { FC } from 'react';
import { SwitchProps } from './View';
export declare const useSwitch: (props: SwitchProps) => readonly [string | undefined, import("react").Dispatch<import("react").SetStateAction<string | undefined>>, import("react").Dispatch<import("react").SetStateAction<string | undefined>>, JSX.Element];
export declare const FSwitch: FC<SwitchProps & {
    name: string;
}>;
export default useSwitch;
