import { useFormik, FormikContext } from "formik"
import Me from "../icons/Person.svg"
import { FInput } from "../components/Input"
import { FSwitch } from "../components/Switch"
import FormField from "../components/FieldHeader"
import { Vexile } from "@haechi/flexile"
import { FCheckbox } from "../components/Checkbox"
import { Text2 } from "../components/Text"

export default () => {
    const formik = useFormik({
        initialValues: {
            학과: "경제",
            학번: "11239",
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
                                    key: "컴공",
                                },
                                {
                                    key: "경제",
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
