import React from "react";

import { Select } from "@duik/it";
// import "@duik/it/dist/styles.css";

export default function select() {
  const [activeOption, setActiveOption] = React.useState;

  /*
   * we don't need the "name", but it cannot be passed to
   * the useState setter, thus the setter cannot be used directly
   */
  const handleOptionClick = (option, name) => {
    setActiveOption(option);
  };
  return (
    <Select
      activeOption={activeOption}
      onOptionClick={handleOptionClick}
      options={[
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        { label: <strong>Highlighted Option</strong>, value: 3 },
        { label: <strong>Highlighted Long Long Option</strong>, value: 4 },
      ]}
    />
  );
}
