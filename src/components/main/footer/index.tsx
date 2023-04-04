import { Link } from "react-router-dom";

import {
  FooterWrapper,
  FooterItem,
  HomeIcon,
  PlusIcon,
  PersonIcon,
} from "./style";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterItem>
        <Link to="/">
          <HomeIcon className="bi bi-house-door"></HomeIcon>
        </Link>
      </FooterItem>

      <FooterItem>
        <Link to="/create-task">
          <PlusIcon className="bi bi-plus"></PlusIcon>
        </Link>
      </FooterItem>

      <FooterItem>
        <PersonIcon className="bi bi-person"></PersonIcon>
      </FooterItem>
    </FooterWrapper>
  );
};
