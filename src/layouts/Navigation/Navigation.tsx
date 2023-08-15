import React from "react";
import { Nav, NavButton, NavList, NavListItem, NavigationDrawer } from "./Navigation.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Navigation: React.FC = () => {
  return (
    <NavigationDrawer>
      <Nav>
        <NavList>
          <NavListItem>
            <NavButton to="/">
              <FontAwesomeIcon icon={faDashboard} />
              Dashboard
            </NavButton>
          </NavListItem>

          <NavListItem>
            <NavButton to="/jobs">
              <FontAwesomeIcon icon={faBriefcase} />
              My Jobs
            </NavButton>
          </NavListItem>
        </NavList>
      </Nav>
    </NavigationDrawer>
  );
};

export default Navigation;
