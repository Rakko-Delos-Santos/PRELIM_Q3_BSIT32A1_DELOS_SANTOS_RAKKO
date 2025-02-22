import { useRef, useState } from "react";
import ListComponent from "./ListComponent";
import MyInput from "./MyInput.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Form() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const [items, setItems] = useState([]);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    if (input1 && input2) {
      const fullName = `${input1} ${input2}`;
      setSubmittedValue(fullName);
      setItems((prevItems) => [...prevItems, fullName]);
      setInput1("");
      setInput2("");
      ref1.current.focus();
    }
  };

  return (
    <form>
      <MyInput
        label="Enter Firstname:"
        ref={ref1}
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <br />
      <MyInput
        label="Enter Lastname:"
        ref={ref2}
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button type="button" class="btn btn-outline-success">
        Success
      </button>

      {/* Displays lists */}
      <ListComponent items={items} />
    </form>
  );
}
