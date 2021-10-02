import styled from 'styled-components';

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 0;
  background-color: #255aff;
  color: #fff;
  text-align: center;
  font-size: 22px;
  height: 70px;
  z-index: 1;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export { FooterWrapper };
