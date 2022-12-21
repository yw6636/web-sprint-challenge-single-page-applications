import * as yup from 'yup';

const formSchema = yup.object().shape({
    username:yup
        .string()
        .trim()
        .required("Name is required")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(["S", "M", "L"], "Size is required"),
    sauce: yup
        .string()
        .oneOf(["original red", "garlic ranch", "bbq sauce", "spinach alfredo"], "Sauce is required"),  
    pepperoni: yup.boolean(),
    dicedtomatoes: yup.boolean(),
    sausage: yup.boolean(),
    blackolives: yup.boolean(),
    specialins:yup
        .string()
})

export default formSchema;