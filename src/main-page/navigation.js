import React from 'react';

const Navigation = (props) => (
  <React.Fragment>
    {props.subtitle}
    <ul>
      <li className={"navigationLink " + (props.status === '' ? 'selected' : '')}
        onClick={() => props.filterTodo('')}>All</li>
      <li className={"navigationLink " + (props.status === 'ongoing' ? 'selected' : '')}
        onClick={() => props.filterTodo('ongoing')}>Ongoing</li>
        <li className={"navigationLink " + (props.status === 'done' ? 'selected' : '')}
          onClick={() => props.filterTodo('done')}>Done</li>
      <li className={"navigationLink " + (props.status === 'new' ? 'selected' : '')}
        onClick={() => props.filterTodo('new')}>New</li>
    </ul>
  </React.Fragment>
);

export default Navigation;