import { useFormik, FormikContext } from "formik"
import { FSwitch } from "../components/Switch"

export default () => {
    const formik = useFormik({
        initialValues: {
            학과: "경제",
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
                <input type="submit" name="submit" />
            </form>
        </FormikContext.Provider>
    )
}
