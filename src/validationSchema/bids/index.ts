import * as yup from 'yup';

export const bidValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  product_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
