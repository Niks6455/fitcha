import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PriceRangeSlider = () => {
  const [rangeValues, setRangeValues] = useState({
    min: 0,
    max: 100000,
  });

  const handleMinChange = (event) => {
    setRangeValues({ ...rangeValues, min: parseInt(event.target.value) });
  };

  const handleMaxChange = (event) => {
    setRangeValues({ ...rangeValues, max: parseInt(event.target.value) });
  };

  const handleRangeChange = (values) => {
    setRangeValues(values);
  };

  const handleChangeComplete = (values) => {
    console.log("Selected price range:", values);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", marginBottom: "30px" }}>
        <div style={{ display: "flex", width: "140px", marginRight: "40px" }}>
          <label htmlFor="min"></label>
          <input
            placeholder="До"
            type="number"
            id="min"
            value={rangeValues.min}
            onChange={handleMinChange}
          />
        </div>
        <div style={{ display: "flex", width: "140px" }}>
          <label htmlFor="max"></label>
          <input
            placeholder="До"
            type="number"
            id="max"
            value={rangeValues.max}
            onChange={handleMaxChange}
          />
        </div>
      </div>

      <InputRange
        minValue={0}
        maxValue={100000}
        value={rangeValues}
        onChange={handleRangeChange}
        onChangeComplete={handleChangeComplete}
        formatLabel={() => ""}
      />
    </div>
  );
};

export default PriceRangeSlider;
