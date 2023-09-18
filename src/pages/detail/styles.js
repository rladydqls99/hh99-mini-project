import styled from "styled-components";

const Container = styled.div`
  padding: 0 32px;
  background-color: #f9f9fb;
  border-radius: 0 0 12px 12px;
  max-width: 1170px;
  margin: 30px auto 30px auto;
`;

const StyledCommentsDiv = styled.div`
  position: relative;
  top: 10px;

  button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const StyledComment = styled.div`
  border-bottom: 1px solid blue;
  padding-bottom: 5px;
`;

export { Container, StyledCommentsDiv, StyledComment };
