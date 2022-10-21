export const Button = ({ href, src, alt, onclick, style, children }) => {
  if (!src) {
    return (
      <a href={href} className="anchors" target="_blank">
        <button className={style}>{children}</button>
      </a>
    );
  }

  if (!children) {
    return (
      <div className={style[0]}>
        <button onClick={onclick} className={style[1]}>
          <img src={src} className={style[2]} alt={alt} />
        </button>
      </div>
    );
  }

  return (
    <button className={style} onClick={onclick}>
      {children}
    </button>
  );
};
