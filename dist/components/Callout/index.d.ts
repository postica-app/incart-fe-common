import { Hexile } from "@haechi/flexile";
import { ComponentProps } from "react";
export declare const Callout: React.FC<{
    icon?: (props: {
        width: string;
        flexShrink: number;
        height: string;
    }) => JSX.Element;
    children: string;
} & ComponentProps<typeof Hexile>>;
export default Callout;
