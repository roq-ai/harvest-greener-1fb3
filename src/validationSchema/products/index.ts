import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  startup_id: yup.string().nullable(),
});
