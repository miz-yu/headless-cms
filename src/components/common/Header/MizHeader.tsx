import paths from 'paths';
import React from 'react';
import { useHistory } from 'react-router';
import { Icon, Menu } from 'semantic-ui-react';
import { MizHeaderMenu } from './MizHeaderStyle';

type MizHeaderProps = {
}

const MizHeader: React.FC<MizHeaderProps> = ({
}) => {
  const history = useHistory();

  return (
    <MizHeaderMenu inverted>
      <Menu.Item
        name='home'
        onClick={() => history.push(paths.home)}
      >
        MizHeadlessCMS
      </Menu.Item>
      <Menu.Item
        name='categories'
        onClick={() => history.push(paths.categories)}
      >
        <Icon name='sticky note' />
        カテゴリ一覧
      </Menu.Item>

      <Menu.Item
        name='tags'
        onClick={() => history.push(paths.tags)}
      >
        <Icon name='tag' />
        タグ一覧
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item
          name='form'
          onClick={() => history.push(paths.form)}
        >
          <Icon name='paper plane outline' />
          お問い合わせ
        </Menu.Item>
      </Menu.Menu>
    </MizHeaderMenu>
  );
};

export default MizHeader;
