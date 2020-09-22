import styled from "styled-components";
import Link from "next/link";

const Container = styled.section`
  h1 {
    color: grey;
  }
`;

export default function Home() {
  return (
    <Container>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="sample">
            <a>sample</a>
          </Link>
        </li>
        <li>
          <Link href="withparam/whatever">
            <a>withparam</a>
          </Link>
        </li>
        <li>
          <Link href="withfetch">
            <a>withdata fetch</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
}
