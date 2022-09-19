import * as Yup from 'yup'
export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  name: Yup.string().required('Required').min(1, 'Too Short'),
  message: Yup.string().required('Required').min(5, 'This message is too Short'),
})