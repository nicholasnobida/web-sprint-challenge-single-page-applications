import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2, 'Name must be at least two characters long')
    .required('Name is required')
})

export default formSchema;