import styled, { css } from "styled-components";

const col = (name) => {
  if (name === "track-play__author") {
    return css`
      -ms-grid-row: 1;
      -ms-grid-column: 2;
      grid-area: author;
      min-width: 49px;
    `;
  }
  return css``;
};
export const TrackPlayClass = styled.div`
  ${(props) => col(props.name)}
`;
const LinkName = (name) => {
  if (name === "track-play__author-link") {
    return css`
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      white-space: nowrap;
    `;
  }
  if (name === "track-play__album-link") {
    return css`
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 24px;
      color: #ffffff;
    `;
  }
  return css``;
};
export const TrackPlay_Link = styled.a`
  ${(props) => LinkName(props.name)}
`;
