import { Hexile } from "@haechi/flexile"
import { styled } from "../../stitches.config"

export const styles = {
    Wrapper: styled(Hexile, {
        backgroundColor: "$grey1",
        borderRadius: "3rem",
        animated: true,
        "&:focus-within": {
            backgroundColor: "white",
            lightBorder: {
                withShadow: true,
            },
        },
        "&:focus-within div": {
            color: "$purple",
        },
    }),
    IconWrapper: styled("div", {
        padding: "3rem",
        paddingRight: "0rem",
        display: "grid",
        color: "$grey5",
    }),
    LogicalInput: styled("input", {
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        padding: "3rem",
        flex: 1,
    }),
}
