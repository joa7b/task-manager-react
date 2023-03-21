import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #292f3f;
  border: 0.2px solid rgba(217, 217, 217, 0.15);
  position: fixed;
  bottom: 0;
  margin-left: 50%;
  transform: translate(-50%);
  width: 70%;
  height: 90px;
  border-radius: 50px 50px 0 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const FooterItem = styled.section`
  font-size: 35px;
  padding: 5px;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:not(:first-child) {
    &:not(:last-child) {
      margin-bottom: 50px;
      background-color: #fff;
      border-radius: 50%;
      color: #2f394b;
    }
  }
`;

export const HomeIcon = styled.i``;

export const PlusIcon = styled.i``;

export const PersonIcon = styled.i``;
