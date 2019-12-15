import React, { useState, useEffect } from "react";
import Base from "./Base";
import FormContext from "./FormContext";
import Debug from "./Debug";
import Form from "./Form";

const DynamicForm = ({ form, initialFields }) => {
  const [fields, setFields] = useState(initialFields);
  const [current, setCurrent] = useState(0);
  const [currentValid, setCurrentValid] = useState(false);

  //   validation check on current question and set currentvalid back to false when question changed
  useEffect(() => {
    const temp = fields[current];

    if (temp !== undefined) {
      if (temp.question_type !== "TextQuestion") {
        setCurrentValid(true);
      } else {
        if (temp.value.length >= temp.min_char_length) {
          setCurrentValid(true);
        } else {
          setCurrentValid(false);
        }
      }
    }
  }, [fields, current]);

  //   go prev page
  const goPrev = () => {
    setCurrent(prevState => prevState - 1);
  };

  //   go next page
  const goNext = () => {
    setCurrent(prevState => prevState + 1);
  };

  //   set value via index
  const setFieldValue = (i, value) => {
    setFields(prevState => {
      const temp = [...prevState];
      temp[i].value = value;

      return temp;
    });
  };

  const setOptionFieldValue = (questionIndex, optionIndex) => {
    setFields(prevState => {
      const temp = [...prevState];
      temp[questionIndex].value[optionIndex] = !temp[questionIndex].value[
        optionIndex
      ];
      return temp;
    });
  };

  return (
    <FormContext.Provider
      value={{
        fields: fields,
        current: current,
        setCurrent: setCurrent,
        currentValid: currentValid,
        setCurrentValid: setCurrentValid,
        setFieldValue: setFieldValue,
        setOptionFieldValue: setOptionFieldValue,
        isSuccess: current >= fields.length,
        isFirstPage: current <= 0,
        goNext: goNext,
        goPrev: goPrev
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <Base>
          <Form />
        </Base>
        {/* <Debug /> */}
      </div>
    </FormContext.Provider>
  );
};

export default DynamicForm;
