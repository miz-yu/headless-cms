import paths from 'paths';
import React from 'react';
import { Container, Header } from 'semantic-ui-react';

type FormMainProps = {
}

const FormMain: React.FC<FormMainProps> = ({
}) => {

  return (
    <Container>
      <Header as="h1" content="お問い合わせ" />
    </Container>
  );
};

export default FormMain;
