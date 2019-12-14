import { createContext } from "react";

const FormContext = createContext({
  fields: [],
  form: {},
  current: null,
  setCurrent: null,
  currentValid: null,
  setCurrentValid: null,
  setFieldValue: null,
  setOptionFieldValue: null,
  isSuccess: false,
  isFirstPage: true,
  goNext: null,
  goPrev: null
});

export default FormContext;
