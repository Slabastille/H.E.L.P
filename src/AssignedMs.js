import React from 'react';
import { Link } from 'react-router-dom';

const AssignedMs = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>Ticket1</Link>
        </li>
        <li>
          <Link to={'/'}>Ticket2</Link>
        </li>
        <li>
          <Link to={'/'}>Ticket3</Link>
        </li>
        <li>
          <Link to={'/'}>Ticket4</Link>
        </li>
        <li>
          <Link to={'/'}>Ticket5</Link>
        </li>
      </ul>
    </div>
  );
};

export default AssignedMs;
