import styled from 'styled-components';
import functions from '../../assets/functions.svg';
import phone from '../../assets/phone.jpg';
import wats from '../../assets/whats.svg';
import { theme } from '../variables';

export const StyledPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title {
    text-shadow: 0px 0px 2px #000;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 12px 0;
  }
`;

export const StyledPhone = styled.div`
  position: relative;
  margin: 0 auto 32px;
  padding: 18px;
  border-radius: 23px;
  background-color: ${theme.colors.bg.blueGray};

  .buttons {
    position: absolute;
    top: 218px;
    left: -7px;
    right: -7px;
    display: flex;
    justify-content: space-between;

    .control {
      display: block;
      width: 7px;
      height: 92px;
      margin-top: auto;
      background-color: ${theme.colors.field.strokeBlue};
      border-radius: 9px;
    }

    .volume {
      .control {
        height: 50px;

        &:not(:last-child) {
          margin-bottom: 9px;
        }
      }
    }
  }

  .container {
    position: relative;
    width: 360px;
    min-height: 800px;
    background: url(${phone}) no-repeat;
    border-radius: 16px;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .statusbar {
    display: flex;
    justify-content: space-between;
    padding: 8px 18px;

    .info {
      display: flex;
      gap: 0 5px;
      width: 100%;
    }

    .time {
      font-size: 11px;
      font-weight: ${theme.fontWeight.bold};
    }

    .functions {
      display: block;
      min-width: 87px;
      height: 12px;
      background: url(${functions}) no-repeat;
    }

    .notifications {
      display: block;
      width: 100%;
      height: 100%;
      background: url(${wats}) no-repeat;
    }
  }
`;

export const StyledNotification = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 344px;
  padding: 12px 12px 20px;
  font-size: 12px;
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.colors.bg.baseDark};
  background-color: ${theme.colors.light};
  border-radius: 16px;
  transform: translate(-50%, -50%);

  .notification-heading {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      background-color: rgba(217, 217, 217, 0.5);
      border-radius: 50%;

      svg {
        width: 10px;
        height: 5px;
        fill: ${theme.colors.midnightBlue};
      }
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: 0 12px;

    .icon {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .list {
      display: flex;

      li {
        position: relative;

        &:not(:last-child) {
          padding-right: 12px;

          &::after {
            content: '';
            position: absolute;
            top: 4px;
            right: 4px;
            width: 4px;
            height: 4px;
            background-color: ${theme.colors.bg.baseDark};
            border-radius: 50%;
          }
        }
      }
    }
  }

  .notification-content {
    padding-left: 36px;

    .heading {
      display: block;

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    .text {
      color: ${theme.colors.dark};
    }

    .img {
      display: block;
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 139px;
      margin-top: 30px;
      border-radius: 16px;
    }
  }
`;
