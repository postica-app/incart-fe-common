import { ComponentProps } from "@stitches/react";
import { styles } from "./styles";
export declare const Button: React.FC<ComponentProps<typeof styles.Wrapper> & {
    icon?: (props: {
        width: string;
    }) => JSX.Element;
}>;
export default Button;
