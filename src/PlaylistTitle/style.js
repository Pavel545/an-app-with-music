import styled, { css } from "styled-components";

export const ContentTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

const col = (number) => {
  if (number === "1") {
    return css`
      width: 447px;
    `;
  }
  if (number === "2") {
    return css`
      width: 321px;
    `;
  }
  if (number === "3") {
    return css`
      width: 245px;
    `;
  }
  if (number === "4") {
    return css`
      width: 60px;
      text-align: end;
    `;
  }
  return css``;
};
export const PlaylistTitleCol = styled.div`
  ${(props) => col(props.number)}
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`;
