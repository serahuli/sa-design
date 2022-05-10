import styled, { css } from 'styled-components';
import { Input } from 'antd';
import { IPOColors } from '../../common';

export const borderGreyCss = css`
  border: 1px solid #ebecf0;
`;
export const borderBlueCss = css`
  border-color: ${IPOColors.blue.secondBlueColor};
`;
export const inputHoverBgCss = css`
  background: ${IPOColors.btn.btnDefaultColor};
`;
export const inputBgCss = css`
  background: #fff;
`;

export const inputCss = css`
  width: 100%;
  border-radius: 2px;
  ${borderGreyCss}
  ${inputBgCss}
	box-shadow: none;
  :hover {
    box-shadow: none;
    ${borderGreyCss}
    ${inputHoverBgCss}
  }
  :focus {
    box-shadow: none;
    ${borderBlueCss}
    ${inputBgCss}
  }
`;

export const CustomInput: typeof Input = styled(Input)`
  ${inputCss}
`;

export const CustomInputPassword = styled(Input.Password)`
  ${inputCss}
`;

export const CustomInputSearch = styled(Input.Search)`
  & .ant-input-wrapper.ant-input-group {
    ${borderGreyCss};
    ${inputBgCss};
    border-radius: 4px;

    & .ant-input {
      ${inputBgCss}
      border: none;

      :focus {
        box-shadow: none;
      }
    }

    & .ant-input-group-addon {
      & .ant-btn {
        ${inputBgCss}
        border: none;
        box-shadow: none;
      }
    }
  }
`;

export const inputWithClearCss = css`
  width: 100%;
  border-radius: 2px;
  ${borderGreyCss}
  ${inputBgCss}
  box-shadow: none;
  background-color: #fafbfc;
  &&:hover:not(.ant-input-affix-wrapper-disabled) {
    ${borderGreyCss}
    ${inputHoverBgCss}
		box-shadow: none;

    .ant-input {
      ${inputHoverBgCss}
    }
  }

  :focus {
    box-shadow: none;
    ${borderBlueCss}
  }

  &&.ant-input-affix-wrapper-focused {
    background-color: #ffffff;
    ${borderBlueCss}
    & .ant-input {
      background: #ffffff;
    }
  }
  & .ant-input {
    background: #fafbfc;
  }
`;

export const CustomInputWithClear: typeof Input = styled(Input)`
  ${inputWithClearCss};
`;
