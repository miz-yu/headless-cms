import paths from 'paths';
import React from 'react';
import { Container, Header } from 'semantic-ui-react';

type TagsMainProps = {
}

const TagsMain: React.FC<TagsMainProps> = ({
}) => {

  return (
    <Container>
      <Header as="h1" content="タグ一覧" />
    </Container>
  );
};

export default TagsMain;
