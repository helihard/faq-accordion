import { useState } from "react";
import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-qna">
      <div className="accordion-question" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <h2>{question}</h2>
        </div>
        <div>
          {isOpen ? (
            <input type="image" src={iconMinus} alt="Close" />
          ) : (
            <input type="image" src={iconPlus} alt="Open" />
          )}
        </div>
      </div>
      {isOpen && <div className="accordion-answer">{answer}</div>}
    </div>
  );
};

export default Accordion;
