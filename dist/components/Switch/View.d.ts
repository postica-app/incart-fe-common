import { ItemType } from "../../types";
export interface SwitchProps {
    items: ItemType[];
    selectedKey?: string;
    onClick?: (selectedKey: string) => void;
}
export declare const SwitchView: React.FC<SwitchProps & {
    errorMessage?: string;
}>;
