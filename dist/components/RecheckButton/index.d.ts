export declare const RecheckButton: React.FC<{
    children: string;
    icon?: (props: {
        className: string;
    }) => JSX.Element;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onDisabledClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    active?: boolean;
}>;
export default RecheckButton;
