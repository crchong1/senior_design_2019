import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header';
import {InputGroup} from 'react-bootstrap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});
