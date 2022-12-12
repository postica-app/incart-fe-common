import { ComponentProps } from "@stitches/react";
import { styles } from "./styles";
export declare const Callout: React.FC<{
    icon?: (props: {
        width: string;
        flexShrink: number;
        height: string;
    }) => JSX.Element;
    children: string;
} & ComponentProps<typeof styles.Container>>;
export default Callout;
