import React from "react";
import FormContext from "./FormContext";

const Success = () => {
  const renderAnswer = ({ question_type, value, options }) => {
    switch (question_type) {
      case "TextQuestion":
        return <p className="break-words">{value ? value : "-"}</p>;

      case "OptionQuestion":
        const temp = [];

        options.map((option, i) => {
          if (value[i]) {
            temp.push(option);
          }
        });

        return temp.join();
      default:
        return null;
    }
  };

  return (
    <FormContext.Consumer>
      {({ fields }) => (
        <>
          <p className="my-5 text-center font-bold text-1xl">Success</p>
          <ol className="list-decimal">
            {fields.map((field, index) => (
              <li key={index}>
                <p>{field.prompt}</p>
                {renderAnswer(field)}
              </li>
            ))}
          </ol>
        </>
      )}
    </FormContext.Consumer>
  );
};

export default Success;
