import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9fb;
  border-radius: 12px;
  max-width: 1170px;
  margin: 30px auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledCommentsDiv = styled.div`
  position: relative;
  top: 20px;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333; /* 텍스트 색상 지정 */
  }

  button {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #0056b3;
    }
  }
  textarea {
    width: 100%;
    height: 100px;
    padding: 10px 0px 0px 10px;
  }
`;

const StyledComment = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #007bff;
    }
  }
`;

export { Container, StyledCommentsDiv, StyledComment };
