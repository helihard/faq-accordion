import Accordion from "./Accordion";
import accordionContent from "../assets/accordionContect";

function MainContainer() {
  return (
    <main>
      <h1>FAQs</h1>
      <div>
        {accordionContent.map(({ question, answer }) => (
          <Accordion question={question} answer={answer} />
        ))}
      </div>
    </main>
  );
}

export default MainContainer;
