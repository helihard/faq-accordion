import { useState } from "react";

const Accordion = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="accordion-qna" id={id} onClick={() => setIsOpen(!isOpen)}>
        <div className="accordion-question">
          <h2>{question}</h2>
        </div>
        {isOpen && <div className="accordion-answer">{answer}</div>}
      </div>
    </div>
  );
};

export default Accordion;
