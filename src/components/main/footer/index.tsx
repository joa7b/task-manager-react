import {
    FooterWrapper,
    FooterItem,
    HomeIcon,
    PlusIcon,
    PersonIcon
} from './style'

export const Footer = () => {

  
  return (
    <FooterWrapper>
      <FooterItem>
        <HomeIcon className="bi bi-house-door"></HomeIcon>
      </FooterItem>

      <FooterItem>
        <PlusIcon className="bi bi-plus"></PlusIcon>
      </FooterItem>

      <FooterItem>
        <PersonIcon className="bi bi-person"></PersonIcon>
      </FooterItem>
    </FooterWrapper>
  );
};
