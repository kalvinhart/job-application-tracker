import React from "react";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { ContentWrapper } from "./PageLayout.styles";
import { Navigation } from "../Navigation";

const PageLayout: React.FC = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Navigation />
        <main>
          <Outlet />
        </main>
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default PageLayout;
