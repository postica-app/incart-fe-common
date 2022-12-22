import { useFormik, FormikContext } from 'formik'
import { Vexile } from '@haechi/flexile'

import { FCheckbox } from '../components/Checkbox'
import FormField from '../components/FieldHeader'
import { FSwitch } from '../components/Switch'
import { FInput } from '../components/Input'
import { Text2 } from '../components/Text'
import Me from '../icons/Person.svg'

export default () => {
    const formik = useFormik({
        initialValues: {
            학과: '경제',
            학번: '',
            이름: '',
        },
        // validateOnBlur: true,
        // validateOnMount: false,
        validateOnChange: true,
        validate(values) {
            const errors: any = {}
            if (values.학과 !== '경제') {
                errors.학과 = '학과는 경제입니다'
            }
            if (values.학번 !== '10132') {
                errors.학번 = '학번은 10132입니다'
            }
            errors.이름 = '이름은 김민수입니다'
            return errors
        },
        onSubmit: (values) => {
            console.log(values)
        },
    })

    return (
        <FormikContext.Provider value={formik}>
            <form onSubmit={formik.handleSubmit}>
                <Vexile gap={6}>
                    <FormField
                        name="학과"
                        info="학과를 잘 선택해야 고생 안합니다 근데"
                        required
                    >
                        <FSwitch
                            items={[
                                {
                                    key: '컴공',
                                },
                                {
                                    key: '경제',
                                },
                            ]}
                            name="학과"
                        />
                    </FormField>
                    <FormField
                        name="학번"
                        info="이건 알아서 잘 하겠지"
                        required
                    >
                        <FInput
                            name="학번"
                            icon={(style) => <Me style={style} />}
                        />
                    </FormField>
                    <FormField name="이름" info="이름은 뭐니?" required>
                        <FInput name="이름" />
                    </FormField>
                    <FormField name="자퇴할거에요?">
                        <FCheckbox name="자퇴">
                            <Text2>잘 가시게</Text2>
                        </FCheckbox>
                    </FormField>
                    <input type="submit" name="submit" />
                </Vexile>
            </form>
        </FormikContext.Provider>
    )
}
