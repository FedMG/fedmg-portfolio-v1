import React from 'react';

const CreateList = ({ listNames, classes }) =>
  listNames.map((eachName) => (
    <li className={classes[0]}>
      <a href={`#${eachName}`} className={classes[1]}>
        {eachName}
      </a>
    </li>
  ));

export default CreateList;
