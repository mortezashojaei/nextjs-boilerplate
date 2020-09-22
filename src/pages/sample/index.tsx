import React from "react";
import styled from "styles/styled-components/styled-components";

const Container = styled.section`
  background: ${(props) => props.theme.colors.blue};
`;

export default function () {
  return (
    <Container>
      <h1>Hi i am sample page</h1>
    </Container>
  );
}
