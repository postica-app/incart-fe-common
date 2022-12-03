import { useCallback, useEffect, useState } from "react"
import { SwitchProps, SwitchView } from "./View"

export const useSwitch = (props: SwitchProps) => {
    const [selectedKey, setSelectedKey] = useState<string>(
        props.selectedKey || props.items[0].key
    )

    const onClick = useCallback((key: string) => {
        setSelectedKey(key)
    }, [])

    return [
        selectedKey,
        setSelectedKey,
        <SwitchView
            selectedKey={selectedKey}
            items={props.items}
            onClick={onClick}
        />,
    ] as const
}

export default useSwitch
