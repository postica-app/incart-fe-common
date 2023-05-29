import { Vexile } from '@haechi/flexile'
import { useField } from 'formik'
import React from 'react'

import { styles } from './styles'
import { Text2 } from '../Text'

type InputProps = Omit<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >,
    'ref'
> & {
    icon?: (props: {
        width: string
        flexShrink: number
        height: string
    }) => JSX.Element
    errorMessage?: string
}

export const Input: React.FC<InputProps> = ({
    icon: Icon,
    errorMessage,
    ...props
}) => (
    <styles.LabelWithDisableTooltip disabled={props.disabled}>
        <Vexile gap={2}>
            <styles.Wrapper>
                {Icon && (
                    <styles.IconWrapper disabled={props.disabled}>
                        <Icon flexShrink={0} width="6rem" height="6rem" />
                    </styles.IconWrapper>
                )}
                <styles.LogicalInput {...props} />
                {props.disabled && <styles.Blocked />}
            </styles.Wrapper>
            {errorMessage && <Text2 blue>{errorMessage}</Text2>}
        </Vexile>
    </styles.LabelWithDisableTooltip>
)

export const FInput: React.FC<
    InputProps & {
        name: string
        showErrorMessage?: 'always' | 'dirty'
    }
> = (props) => {
    const [input, meta] = useField(props.name)

    return (
        <Input
            {...props}
            {...input}
            errorMessage={
                props.showErrorMessage === 'always'
                    ? meta.error
                    : meta.touched
                    ? meta.error
                    : undefined
            }
        />
    )
}

export default Input
