// Test away!
import React from 'react'
import {render, fireEvent} from '@testing-library/react';
import Display from './Display';

test('displays unlock and open',()=>{
   const {getByText} =  render(<Display/>);
   expect(getByText(/unlocked/i)).toBeDefined()
   expect(getByText(/open/i)).toBeDefined()
})

test('display close if the close prop is true',()=>{
   const mock = {
      closed: true
   }
   const {getByText} = render(<Display closed={mock.closed}/>)
   expect(getByText(mock.closed ? /closed/i : /open/i )).toBeDefined()

})

test ('display close if the open prop is true',()=>{
   const mock ={
      locked: true
   }
   const {getByText} = render(<Display opened={mock.opened}/>)
   expect(getByText(mock.opened ? /opened/i : /unlocked/i));
});

test('when `locked` or `closed` use the `red-led` class',()=>{
   const mock ={
      locked: true,
      closed: true
   }
   const {getByText}= render(<Display locked={mock.locked} closed={mock.closed}/>)
   const Locked = getByText(/locked/i);
   const Closed = getByText(/closed/i);
   expect(Locked.classList.contains('red-led')).toBe(true)
   expect(Closed.classList.contains('red-led')).toBe(true)
})

test('when `unlocked` or `open` use the `green-led` class',()=>{
   const mock ={
      locked: false,
      closed: false
   }
   const {getByText} = render(<Display locked={mock.locked} closed={mock.closed}/>)
   const Locked = getByText(/locked/i)
   const Closed = getByText(/unlocked/i)
   expect(Locked.classList.contains('green-led')).toBe(true);
   expect(Closed.classList.contains('green-led')).toBe(true);

})
