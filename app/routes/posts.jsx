import { Outlet } from "remix";
import { Container, Row, Col } from "react-bootstrap";

function Posts() {
  return (
    <Container>
      <Row>
        <Outlet />
      </Row>
    </Container>
  );
}

export default Posts;

{
  /* <App>
  <Posts>
    <PostsIndex /> (Outlet)
  </Posts>
</App> */
}
