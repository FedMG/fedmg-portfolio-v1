import { Logo } from "./Logo";

const Top = ({ title }) => (
  <div className="top flex-center">
    <h1 className="inline-block">
      <a href="#Home" className="top__anchor flex-center">
        {title}
        <Logo />
      </a>
    </h1>
  </div>
);

export default Top;
