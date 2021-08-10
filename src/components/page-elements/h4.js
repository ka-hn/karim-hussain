import styled from 'styled-components';

export const H4 = styled.h4`
  font-family: ${({ theme }) => theme.font.serif};
  font-size: ${({ theme }) => theme.fontSize['5xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.grey[50]};
  line-height: ${({ theme }) => theme.lineHeight.fromFontSize(theme.fontSize['5xl'])};
`;
