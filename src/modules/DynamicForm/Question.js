import React from "react";
import useWindowSize from "../../utils/useWindowSize";

const Question = ({
  id,
  question_type,
  prompt,
  is_required,
  min_char_length,
  index,
  setFieldValue,
  value,
  current,
  options,
  setOptionFieldValue
}) => {
  const { height, width } = useWindowSize();

  const renderInput = () => {
    switch (question_type) {
      case "TextQuestion":
        return (
          <textarea
            className="px-4 py-2 border outline-none shadow w-full"
            rows={width < 425 ? 3 : 5}
            value={value}
            onChange={e => setFieldValue(index, e.target.value)}
          />
        );

      case "OptionQuestion":
        return options.map((option, i) => (
          <div>
            <input
              onChange={() => setOptionFieldValue(index, i)}
              checked={value[i]}
              type="checkbox"
            />
            <span className="mx-2">{option}</span>
          </div>
        ));

      default:
        return null;
    }
  };

  if (index === current) {
    return (
      <div className="my-20">
        <p className="my-5">{prompt}</p>
        <div>{renderInput()}</div>
      </div>
    );
  }

  return null;
};

export default Question;
