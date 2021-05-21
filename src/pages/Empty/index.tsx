import React from 'react';
import Header from '../../components/Header';

interface IEmptyPage {
  title?: string;
}

const EmptyPage: React.FC<IEmptyPage> = ({ title }) => {
  return (
    <div>
      <Header />
      <div>This is Empty page! {title}</div>;
    </div>
  );
};

export default EmptyPage;
