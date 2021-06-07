import * as yup from 'yup';

const yupOptions = {
  strict: false,
  abortEarly: false, // return all errors
  stripUnknown: true, // remove additional properties
  recursive: true
}

export const validatorCompiler = ({ schema }) => {
  return function (data) {
    // with option strict = false, yup `validateSync` function returns the coerced value if validation was successful, or throws if validation failed
    try {
      const result = schema.validateSync(data, yupOptions)
      return { value: result }
    } catch (e) {
      return { error: e }
    }
  }
}

export const HealthSchema = {
  querystring: yup.object({
    testArg: yup.string().required().nullable(false),
  }).required()
};
