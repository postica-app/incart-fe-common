import { FC, useCallback, useEffect, useState } from 'react'
import { SwitchProps, SwitchView } from './View'
import { useField } from 'formik'

export const useSwitch = (props: SwitchProps) => {
    const [selectedKey, setSelectedKey] = useState<string | undefined>(
        props.selectedKey || props.items[0]?.key
    )
    const [errorMessage, setErrorMessage] = useState<string>()

    const onClick = useCallback((key: string) => {
        setSelectedKey(key)
    }, [])

    return [
        selectedKey,
        setSelectedKey,
        setErrorMessage,
        props.items.length === 0 ? (
            <></>
        ) : (
            <SwitchView
                {...props}
                selectedKey={selectedKey}
                errorMessage={errorMessage}
                onClick={onClick}
            />
        ),
    ] as const
}

export const FSwitch: FC<
    SwitchProps & {
        name: string
    }
> = (props) => {
    const [_, meta, helper] = useField(props.name)
    const [selected, __, setError, Switch] = useSwitch({
        ...props,
        selectedKey: meta.initialValue,
    })

    useEffect(() => {
        helper.setValue(selected)
    }, [selected])

    useEffect(() => {
        setError(meta.error)
    }, [meta.error])

    return Switch
}

export default useSwitch
