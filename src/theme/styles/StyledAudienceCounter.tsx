import styled from 'styled-components';
import { theme } from '../variables';

export const StyledAudienceCounter = styled.div`
  display: flex;
  gap: 0 12px;

  .icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .caption {
    display: block;
    font-weight: ${theme.fontWeight.medium};
    font-size: 12px;
    color: ${theme.colors.dark};
  }

  .count {
    display: block;
    font-weight: ${theme.fontWeight.semiBold};
    font-size: 20px;
    color: ${theme.colors.light};
  }
`;
