import Accordion from "./Accordion";
import accordionContent from "../assets/accordionContent";

function MainContainer() {
  return (
    <main>
      <h1>FAQs</h1>
      <div>
        {accordionContent.map(({ question, answer }, index) => (
          <Accordion
            key={index}
            question={question}
            answer={answer}
            id={
              index === accordionContent.length - 1 ? "last-accordion-item" : ""
            }
          />
        ))}
      </div>
    </main>
  );
}

export default MainContainer;
