import paths from 'paths';
import React from 'react';
import { Container, Header } from 'semantic-ui-react';

type PostMainProps = {
}

const PostMain: React.FC<PostMainProps> = ({
}) => {

  return (
    <Container>
      <Header as="h1" content="記事" />
    </Container>
  );
};

export default PostMain;
