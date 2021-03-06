import styled from "styled-components";

const Book = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/images/book.png);
  background-repeat: no-repeat;
  height: 800px;
  margin: 0 auto 20px;
  position: relative;
  width: 1200px;
`;

export default Book;
