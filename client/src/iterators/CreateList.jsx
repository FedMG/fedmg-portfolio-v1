export const CreateList = ({ listNames, classes }) => {
  return (
    <ul className={classes[0]}>
      {listNames.map(({ id, name }) => (
        <li className={classes[1]} key={id}>
          <a href={`#${name}`} className={classes[2]}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};