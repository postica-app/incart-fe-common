import { FC } from "react";
import { SwitchProps } from "./View";
export declare const useSwitch: (props: SwitchProps) => readonly [string, import("react").Dispatch<import("react").SetStateAction<string>>, import("react").Dispatch<import("react").SetStateAction<string | undefined>>, JSX.Element];
export declare const FSwitch: FC<SwitchProps & {
    name: string;
}>;
export default useSwitch;
