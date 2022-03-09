import styled from "styled-components";

export const Loader = styled.div`
  min-height: 120px;
  display: flex;
  align-items: center;
  .loading {
    .line {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin: 0 2px;
      border-radius: 15px;
      background-color: #10A5E3;
      border: 4px solid black;
      &:nth-last-child(1) {
        animation: loading 0.6s 0.1s ease-in-out infinite;
      }
      &:nth-last-child(2) {
        animation: loading 0.6s 0.2s ease-in-out infinite;
      }
      &:nth-last-child(3) {
        animation: loading 0.6s 0.3s ease-in-out infinite;
      }
    }
  }
  @keyframes loading {
    0% { transform: translate(0, 0); }
    50% { transform: translate(0, 15px); }
    100% { transform: translate(0, 0); }
  }
`;
