import React, { useState } from "react";
import "./assets/styles/index.css";
import DynamicForm from "./modules/DynamicForm";
import ProfilePage from "./modules/ProfilePage";
import form from "./form.json";

const routes = [
  { name: "Dynamic Form", component: DynamicForm },
  { name: "Profile Page", component: ProfilePage }
];

function App() {
  const [routeIndex, setRouteIndex] = useState(1);

  const initialFields = () => {
    const temp = [];

    const defaultValue = (type, options) => {
      switch (type) {
        case "TextQuestion":
          return "";
        case "OptionQuestion":
          return options.map(() => false);

        default:
          return "";
      }
    };

    form.questions.map(q => {
      return temp.push({
        ...q,
        value: defaultValue(q.question_type, q.options)
      });
    });

    return temp;
  };

  const renderCurrentPage = () => {
    const Component = routes[routeIndex].component;
    return <Component form={form} initialFields={initialFields} />;
  };

  return (
    <>
      <div className="fixed top-0 right-0 p-5">
        <button
          className="outline-none"
          onClick={() => {
            setRouteIndex(prevState => (prevState !== 0 ? 0 : 1));
          }}
        >
          {routeIndex === 0 ? "ProfilePage" : "DynamicForm"}
        </button>
      </div>
      <div className="w-full">{renderCurrentPage()}</div>
    </>
  );
}

export default App;
