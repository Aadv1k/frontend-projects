import { useState, useEffect } from "react";

export default function Slider({ min, max, length, setLength }) {
  const [slider, setSlider] = useState(min + 8);
  useEffect(() => {
    setLength(slider - 1);
  }, [slider]);

  const percent = Math.ceil((slider / max) * 100);

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={slider}
        className="slider"
        style={{
          backgroundImage: `linear-gradient(to right, #a4ffaf ${percent}%, #18171f ${percent}%)`,
        }}
        onChange={(e) => {
          setSlider(parseInt(e.target.value, 10));
        }}
      />
    </>
  );
}
