import { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="accordion-question" onClick={() => setIsOpen(!isOpen)}>
        <div>{question}</div>
        {isOpen && <div className="accordion-answer">{answer}</div>}
      </div>
    </div>
  );
};

export default Accordion;
