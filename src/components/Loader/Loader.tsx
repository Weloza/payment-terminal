import React from 'react';
import { LoaderContainer, Spinner } from './styled';

export const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};
