import { useState } from "react";

export default function Slider() {
  const [slider, setSlider] = useState(1);

  return (
    <>
      <input
        type="range"
        min="1"
        max="32"
        value={slider}
        className="slider"
        style={{
          backgroundImage: `linear-gradient(to right, #a4ffaf ${slider}%, #18171f ${slider}%)`
        }}
        onChange={(e) => {
          setSlider(parseInt(e.target.value, 10));
        }}
      />
    </>
  );
}
