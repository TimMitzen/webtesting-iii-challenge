// Test away!

import React from 'react'
import {fireEvent, render} from '@testing-library/react';

import Controls from './Controls';



test("If locked, can't be opened or closed ", () => {
   const toggle = jest.fn();
   const { getByText } = render(
     <Controls locked={true} closed={true} toggle={toggle} />
   );
   const open = getByText(/open gate/i);
   fireEvent.click(open);
   expect(toggle).not.toHaveBeenCalled();
 });

 test("buttons rendered.", () => {
   const { getAllByText } = render(<Controls />);
   const buttons = getAllByText(/gate/i);
   expect(buttons).toBeDefined();
 });


test("locked button ia disabled if gate is open", () => {
   const lock = jest.fn();
   const { getByText } = render(
     <Controls closed={false} lock={lock} />
   );
   const lockBtn = getByText(/lock gate/i);
   fireEvent.click(lockBtn);
   expect(lock).not.toHaveBeenCalled();
 });


 test("buttons' text changes to reflect the state the door will be in if clicked", () => {
   const  mock= {
     locked: false,
     closed: false
   }
   const toggleLocked = jest.fn();
   const toggleClosed = jest.fn();
   const { getAllByText } = render(<Controls locked={mock.locked} toggleLocked={toggleLocked} closed={mock.closed} toggleClosed={toggleClosed} />);
   const [toggleLock, toggleClose] = getAllByText(/gate/i);
   fireEvent.click(toggleClose);
   expect(toggleClosed).toHaveBeenCalled();
   expect(toggleClose.textContent).toBe("Close Gate");
   expect(toggleLock.textContent).toBe('Lock Gate');
 })


