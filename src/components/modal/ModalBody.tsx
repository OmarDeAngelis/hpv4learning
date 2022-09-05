import styled from "@emotion/styled";

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 30px 12px 18px 12px;

  @media screen and (min-width: 1024px) {
    padding: 45px 70px 18px 70px;
  }
`;