import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';

// The App should render without crashing
test('App renders wihtout crashing', () => {

  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<App />);

});
