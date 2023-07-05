import { render, screen } from '@testing-library/react';

import React from 'react';
import App from './App';

// The App should render without crashing
test('App renders wihtout crashing', () => {

 
  render(<App />);

});
