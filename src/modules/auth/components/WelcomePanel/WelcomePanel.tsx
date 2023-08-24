import React from "react";
import { WelcomePanelBackground } from "./WelcomePanel.styles";
import { H1, Span } from "../../../../styles/TypographyStyles";

const WelcomePanel: React.FC = () => {
  return (
    <WelcomePanelBackground>
      <H1>Job Application Tracker</H1>
      <Span $fontSize={20}>Track your job applications from one single location</Span>
    </WelcomePanelBackground>
  );
};

export default WelcomePanel;
