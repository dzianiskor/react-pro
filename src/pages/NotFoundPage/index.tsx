import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';

const NotFoundPage = () => {
  return (
    <div>
      NotFoundPage 404
      <button type="button" onClick={() => navigate(LinkEnum.HOME)}>
        Back
      </button>
    </div>
  );
};

export default NotFoundPage;
