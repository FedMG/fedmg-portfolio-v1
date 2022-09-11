import React from 'react';

const CreateList = ({ listNames, classes }) => (
  <ul className={classes[0]}>
    {listNames.map((eachName) => (
      <li className={classes[1]}>
        <a href={`#${eachName}`} className={classes[2]}>
          {eachName}
        </a>
      </li>
    ))}
  </ul>
);

export default CreateList;
