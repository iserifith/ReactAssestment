import React from "react";
import FormContext from "./FormContext";
import Question from "./Question";

const Form = () => {
  return (
    <FormContext.Consumer>
      {({ fields, current, setFieldValue, setOptionFieldValue }) =>
        fields.map((field, index) => (
          <Question
            key={field.id}
            id={field.id}
            index={index}
            current={current}
            question_type={field.question_type}
            prompt={field.prompt}
            is_required={field.is_required}
            min_char_length={field.min_char_length}
            value={field.value}
            setFieldValue={setFieldValue}
            error={field.error}
            options={field.options}
            setOptionFieldValue={setOptionFieldValue}
          />
        ))
      }
    </FormContext.Consumer>
  );
};

export default Form;
