import { useFormik, FormikContext } from "formik"
import Me from "../icons/Person.svg"
import { FInput } from "../components/Input"
import { FSwitch } from "../components/Switch"

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
                <FInput name="학번" icon={(style) => <Me style={style} />} />
                <input type="submit" name="submit" />
            </form>
        </FormikContext.Provider>
    )
}
