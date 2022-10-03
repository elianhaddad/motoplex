import * as yup from 'yup';

const validationsForm = yup.object({
    name: yup.string().required('Requerido'),
    surname: yup.string().required('Requerido'),
    phone: yup.string().required('Número de teléfono'),
    email: yup
        .string()
        .email('Ingrese un email válido')
        .required('Requerido'),
    city: yup.string(),
    model: yup.string().required('Requerido'),
    message: yup
        .string()
        .required('Requerido')
});

export default validationsForm;
