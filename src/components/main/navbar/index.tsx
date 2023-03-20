import {
  HeaderWrapper,
  HeaderItem,
  MenuCircle,
  IconMenuCircle,
  TitleNavbar,
  ImageNavbar
} from "./style";

export const Navbar = () => {
  return (
    <HeaderWrapper>
      <HeaderItem>
        <MenuCircle>
          <IconMenuCircle className="bi bi-list"></IconMenuCircle>
        </MenuCircle>
      </HeaderItem>

      <HeaderItem>
        <TitleNavbar>Gerenciador de tarefas</TitleNavbar>
      </HeaderItem>

      <HeaderItem>
        <ImageNavbar src="http://via.placeholder.com/40x40" alt="" />
      </HeaderItem>
    </HeaderWrapper>
  );
};
