import { Logo } from "@/components/Logo";
import { header } from "@/routes/refs/list";

const Header = () => {
  const { routeNames, styles } = header
  
  return (
    <>
      <header className="header" id="Home">
        <div className="top flex-center">
          <h1 className="inline-block">
            <a href="#Home" className="top__anchor flex-center">
              DiDeploy
              <Logo />
            </a>
          </h1>
        </div>
      </header>
      <nav className="navbar flex-center">
        <ul className={styles[0]}>
          {routeNames.map(({ id, name }) => (
            <li className={styles[1]} key={id}>
              <a href={`#${name}`} className={styles[2]}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
