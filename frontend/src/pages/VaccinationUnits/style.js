import styled from 'styled-components';

const VaccinationUnitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`;

const UnitsCardsContainer = styled.div`
  height: fit-content;
  display: flex;
  max-width: 90%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;

  @media screen and (max-width: 1200px) {
    max-width: 100vh;
    justify-content: center;
    height: fit-content;
    margin-top: 30px;
    margin-bottom: 100px;
  }
`;

const UnitCard = styled.div`
  width: 300px;
  background-color: white;
  border: 1px solid black;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

const UnitName = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const UnitDetails = styled.div`
  display: flex;
  line-height: 150%;
  flex-direction: column;
  font-size: 20px;
`;

const DetailTitle = styled.span`
  font-weight: 500;
`;

export {
  VaccinationUnitsWrapper,
  UnitsCardsContainer,
  UnitCard,
  UnitName,
  UnitDetails,
  DetailTitle,
};
