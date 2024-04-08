import { useEffect, useState } from "react";
import MainContainer from "./components/MainContainer";
import Attribution from "./components/Attribution";
import backgroundPatternDesktop from "./assets/images/background-pattern-desktop.svg";
import backgroundPatternMobile from "./assets/images/background-pattern-mobile.svg";

function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    window.innerWidth <= 375
      ? backgroundPatternMobile
      : backgroundPatternDesktop
  );

  useEffect(() => {
    const handleBrowserResize = () => {
      setBackgroundImage(
        window.innerWidth <= 375
          ? backgroundPatternMobile
          : backgroundPatternDesktop
      );
    };

    window.addEventListener("resize", handleBrowserResize);

    return () => {
      window.removeEventListener("resize", handleBrowserResize);
    };
  }, []);

  return (
    <>
      <div
        id="body-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          display: "grid",
          placeItems: "start center",
        }}
      >
        <MainContainer />
        <Attribution />
      </div>
    </>
  );
}

export default App;
