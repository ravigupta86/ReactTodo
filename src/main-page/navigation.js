const Navigation = (props) => (
    <>
    <h5>{props.subtitle}</h5>
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
  </>
);

export default Navigation;