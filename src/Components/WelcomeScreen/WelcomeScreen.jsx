import "./WelcomeScreen.css";
import BlurText from "../BlurText/BlurText";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

const WelcomeScreen = ({ onExplore }) => {
  return (
    <div className="welcome-screen">
      <h2>
        <BlurText
          text="Unique. Seamless. Creative."
          delay={250}
          animateBy="words"
          direction="top"
        />
      </h2>
      <h2>
        <BlurText
          text="Frontend experiences, redefined."
          delay={250}
          animateBy="words"
          direction="bottom"
        />
      </h2>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={2}
      >
        <button
          onClick={() => {
            onExplore();
          }}
        >
          Explore Work
        </button>
      </AnimatedContent>
    </div>
  );
};

export default WelcomeScreen;
