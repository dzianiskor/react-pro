import React from 'react';

interface IEmptyPage {
  title?: string;
}

const EmptyPage: React.FC<IEmptyPage> = ({ title }) => {
  return <div>This is Empty page! {title}</div>;
};

export default EmptyPage;
