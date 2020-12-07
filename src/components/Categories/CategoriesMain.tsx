import paths from 'paths';
import React from 'react';
import { Container, Header } from 'semantic-ui-react';

type CategoriesMainProps = {
}

const CategoriesMain: React.FC<CategoriesMainProps> = ({
}) => {

  return (
    <Container>
      <Header as="h1" content="カテゴリ一覧" />
    </Container>
  );
};

export default CategoriesMain;
