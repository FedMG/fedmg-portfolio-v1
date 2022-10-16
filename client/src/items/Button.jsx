export const Button = ({ href, name, src, alt, onclick, style }) => {
  if (!src) {
    return (
      <a href={href} className="anchors" target="_blank">
        <button className={style}>{name}</button>
      </a>
    );
  }

  if (src) {
    return (
      <div className={style[0]}>
        <button onClick={onclick} className={style[1]}>
          <img src={src} className={style[2]} alt={alt} />
        </button>
      </div>
    );
  }
};
