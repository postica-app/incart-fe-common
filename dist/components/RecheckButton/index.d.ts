export declare const RecheckButton: React.FC<{
    children: string;
    icon?: (props: React.CSSProperties) => JSX.Element;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onDisabledClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    active?: boolean;
}>;
export default RecheckButton;
