import styled from 'styled-components';

export const HEADER = styled.header`
  background-color: ${({ theme }) => theme.palette.primary.main};
  position: sticky;
  width: 100%;
  display: flex;
  z-index: 1100;
  flex-shrink: 0;
  flex-direction: column;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
`;
