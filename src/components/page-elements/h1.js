import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.font.serif};
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.fromFontSize(theme.fontSize['4xl'])};
  margin-top: ${({ theme }) => theme.spacing[8]};
`;
