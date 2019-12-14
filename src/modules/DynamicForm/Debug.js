import React from "react";
import FormContext from "./FormContext";

const Debug = () => {
  return (
    <FormContext.Consumer>
      {({ fields, current, currentValid, isSuccess, isFirstPage }) => (
        <pre>
          <code>
            {JSON.stringify(
              {
                current,
                currentValid,
                isSuccess,
                isFirstPage,
                fields: fields[current]
              },
              null,
              2
            )}
          </code>
        </pre>
      )}
    </FormContext.Consumer>
  );
};

export default Debug;
