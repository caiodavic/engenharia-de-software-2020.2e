import styled from 'styled-components';

const NavbarWrapper = styled.div`
  width: 100%;
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 20px 5%;
  @media screen and (max-width: 1200px) {
    position: absolute;
    padding: 15px 2%;
  }
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    height: 40px;
  }
`;

const LoginButton = styled.div`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f3fd3;
  padding: 10px 10px;
  border-radius: 10px;
  width: fit-content;
  height: 50px;

  & > a:hover {
    border-bottom: 2px solid white;
  }

  @media screen and (max-width: 1200px) {
    height: 40px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExitButton = styled.div`
  background-color: white;
  font-size: 18px;
  font-weight: 700;
  margin-left: 12px;
  cursor: pointer;
  color: #0f3fd3;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  & > p:hover {
    border-bottom: 2px solid #0f3fd3;
  }

  @media screen and (max-width: 1200px) {
    width: 40px;
    height: 40px;
  }
`;

export { NavbarWrapper, Logo, LoginButton, Buttons, ExitButton };
