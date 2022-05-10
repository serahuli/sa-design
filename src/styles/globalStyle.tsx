import { flex } from './mixins';
import { createGlobalStyle } from 'styled-components';
import { IPOColors } from './common';

export const IPOGlobalStyle = createGlobalStyle`
  @import-normalize;
  html {
    i {
      font-style: normal;
    }
  }
  body{
    margin:0;
    padding:0;
    background: #FAFAFA;
		font-family: PingFang SC;
    /* 去掉按钮的阴影 */
    [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node{
      display: none;
    }
    i {
      font-style: normal;
    }
  }

  .ant-notification-notice.custom-notify {
    ${flex('row', 'space-between', 'center')};
    width: auto;
    min-width: 300px;
    height: 55px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 20px 12px;

    .ant-notification-notice-message {
      font-weight: 500;
      color: #434F67;
      margin-left: 30px;
      font-size: 14px;
    }
    .ant-notification-notice-icon {
      margin-top: -2px;

      > img {
        width: 16px;
      }
    }
  }
  .ant-notification-notice-error {
    border-left: 4px solid #DE350A;
  }
  .ant-notification-notice-success {
    border-left: 4px solid #00875A;
  }
  .ant-notification-notice-warning {
    border-left: 4px solid ${IPOColors.blue.secondBlueColor};
  }
`;
