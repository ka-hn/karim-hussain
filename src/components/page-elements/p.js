import styled from 'styled-components';

export const P = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: ${({ theme }) => theme.lineHeight.fromFontSize(theme.fontSize.base)};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;
