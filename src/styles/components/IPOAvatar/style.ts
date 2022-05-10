import styled from 'styled-components';

export const IpoAvatarWrap = styled.span<{ fontSize: number }>`
  min-width: ${({ fontSize }) => `${fontSize}px`};;
  & span {
    font-size: ${({ fontSize }) => `${fontSize > 30 ? (fontSize - 20 < 10 ? 16 : fontSize - 20) : fontSize - 4}px`};
  }
`;
