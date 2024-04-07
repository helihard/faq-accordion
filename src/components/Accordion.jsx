import { useState } from "react";
import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";

const Accordion = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-qna" id={id} onClick={() => setIsOpen(!isOpen)}>
      <div className="accordion-question">
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
