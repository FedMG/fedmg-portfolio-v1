const Top = ({ title, span }) => (
  <div className="Top">
    <div className="Top__side-items"></div>
    <h1 className="anchor__title-logo">
      <a href="#Home" className="Top__anchor">
        {title}
        <span className="title__span-logo">{span}</span>
      </a>
    </h1>
    <div className="Top__side-items"></div>
  </div>
);

export default Top;
