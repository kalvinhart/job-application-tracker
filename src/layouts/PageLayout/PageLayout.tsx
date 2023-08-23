import React from "react";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { ContentWrapper } from "./PageLayout.styles";
import { Navigation } from "../Navigation";
import { Main } from "../../styles/CommonStyles";

const PageLayout: React.FC = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Navigation />
        <Main>
          <Outlet />
        </Main>
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default PageLayout;
