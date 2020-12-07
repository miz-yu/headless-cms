import paths from 'paths';
import React from 'react';
import { Container, Header } from 'semantic-ui-react';

type HomeMainProps = {
}

const HomeMain: React.FC<HomeMainProps> = ({
}) => {

  return (
    <Container>
      <Header as="h1" content="トップ" />
    </Container>
  );
};

export default HomeMain;
