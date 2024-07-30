"use client";

import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [...Array(1000)].map((_, i) => ({
  label: `Option ${i + 1}`,
  value: `option-${i + 1}`,
}));

const MultiSelectList = () => {
  const [selected, setSelected] = useState([]);

  const customValueRenderer = (selected, _options) => {
    if (selected.length === options.length) {
      return `All item selected `;
    }

    return selected.length ? `${selected.length} Items selected` : ` -- No option selected -- `;
  };

  return (
    <MultiSelect
      options={options}
      value={selected}
      onChange={setSelected}
      valueRenderer={customValueRenderer}
    />
  );
};

export default MultiSelectList;
