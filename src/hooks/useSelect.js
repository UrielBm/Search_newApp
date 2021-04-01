import { useState } from "react";
import "./styles.scss";
const useSelect = (stateSelect, categories) => {
  //state del hook
  const [state, setUpdateState] = useState(stateSelect);
  const handleOnChange = (e) => {
    const { value } = e.target;
    setUpdateState(value);
  };
  const SelectNews = () => (
    <select className="select" value={state} onChange={handleOnChange}>
      {categories.map(({ value, text }) => {
        return (
          <option value={value} key={value}>
            {text}
          </option>
        );
      })}
    </select>
  );
  return [state, SelectNews];
};

export default useSelect;
