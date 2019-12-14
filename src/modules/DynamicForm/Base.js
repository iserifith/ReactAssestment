import React from "react";
import FormContext from "./FormContext";
import Success from "./Success";

const Base = ({ children }) => {
  return (
    <FormContext.Consumer>
      {({
        fields,
        current,
        currentValid,
        setCurrent,
        setCurrentValid,
        setFieldValue,
        isSuccess,
        isFirstPage,
        goNext,
        goPrev
      }) => {
        const question = fields[current];

        const isNextButtonDisabled = () => {
          if (isSuccess) return true;
          if (!question.is_required) return false;
          if (currentValid) return false;
          return true;
        };

        return (
          <div className="px-10 py-32 w-screen md:w-2/4">
            <h1 className="my-20 text-2xl text-center">
              This is a title for the form Header
              <hr></hr>
            </h1>

            {isSuccess ? <Success /> : children}
            <div className="flex flex-row justify-around items-center my-10">
              <div>
                <button
                  className={`p-2 rounded font-bold text-white ${
                    isFirstPage ? "bg-blue-300" : "bg-blue-500"
                  }`}
                  disabled={isFirstPage}
                  onClick={goPrev}
                >
                  Prev
                </button>
              </div>
              <div>
                <button
                  disabled={isNextButtonDisabled()}
                  onClick={goNext}
                  className={`p-2 rounded font-bold text-white ${
                    isNextButtonDisabled() ? "bg-blue-300" : "bg-blue-600"
                  } ${isSuccess ? "hidden" : "block"}`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </FormContext.Consumer>
  );
};

export default Base;
