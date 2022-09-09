import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ModalBody = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
`;

export const ModalTypography = styled(Typography)`
  color: var(--gray-500);
  text-align: center;
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
    line-height: 27px;
  } ;
`;
