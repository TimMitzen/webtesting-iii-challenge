// Test away
import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import DashBoard from './Dashboard'

test("buttons rendered.", () => {
   const { getAllByText } = render(<DashBoard />);
   const buttons = getAllByText(/locked/i);
   expect(buttons).toBeDefined();
 });