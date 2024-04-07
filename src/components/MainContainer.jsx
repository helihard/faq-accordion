import Accordion from "./Accordion";
import accordionContent from "../assets/accordionContent";
import iconStar from "../assets/images/icon-star.svg";

function MainContainer() {
  return (
    <main>
      <div id="accordion-title">
        <img src={iconStar} alt="Star-icon" />
        <h1>FAQs</h1>
      </div>
      <div>
        {accordionContent.map(({ question, answer }, index) => (
          <Accordion key={index} question={question} answer={answer} />
        ))}
      </div>
    </main>
  );
}

export default MainContainer;
