import { Hexile } from "@haechi/flexile"
import { styled } from "../../stitches.config"

export const styles = {
    Wrapper: styled(Hexile, {
        backgroundColor: "$grey1",
        borderRadius: "3rem",
        animated: true,
        "&:focus-within": {
            backgroundColor: "white",
            lightBorder: true,
        },
    }),
    IconWrapper: styled("div", {
        padding: "3rem",
        paddingRight: "0rem",
        display: "grid",
    }),
    LogicalInput: styled("input", {
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        padding: "3rem",
        paddingLeft: "2rem",
        flex: 1,
    }),
}
