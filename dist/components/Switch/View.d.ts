import { Item } from "../../types";
export interface SwitchProps {
    items: Item[];
    selectedKey?: string;
    onClick?: (selectedKey: string) => void;
}
export declare const SwitchView: React.FC<SwitchProps & {
    errorMessage?: string;
}>;
