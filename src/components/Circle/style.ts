import styled from "styled-components";

export const CategoryItem = styled.div`
  display: flex;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  overflow: hidden;
  margin: 10px;
  box-shadow: 1px 5px 7px rgb(0 0 0 / 16%);
    a {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      background-color: #151514;
      color: white;
      transition: .4s ease-in-out;
      text-transform: capitalize;
      &:hover {
        background-color: #10A5E3;
      }
    }
`;
