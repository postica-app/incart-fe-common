import useSwitch from "../components/Switch"

export default () => {
    const [value, setValue, setErrorMessage, Switch] = useSwitch({
        items: [
            {
                name: "옵션1",
                key: "p1",
            },
            {
                name: "옵션2",
                key: "p2",
            },
        ],
    })

    return <>{Switch}</>
}
