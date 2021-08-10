import styled from 'styled-components';

export const FOOTER = styled.footer`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  width: 100%;
  z-index: 1100;
  bottom: 0;
  position: absolute;
  text-align: center;
`;
