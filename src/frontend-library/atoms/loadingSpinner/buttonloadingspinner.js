import React from 'react';
import { Spinner } from 'react-bootstrap';

export const ButtonLoadingSpinner = () => {
  return (
    <> <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
    </>
  )
}