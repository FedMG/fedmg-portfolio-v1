export const Button = ({ href, src, alt, onclick, style, children }) => {
  if (href) {
    return (
      <a href={href} className={style[0]} target='_blank' rel='noreferrer'>
        <button className={style[1]}>{children}</button>
      </a>
    )
  }

  if (!children) {
    return (
      <div className={style[0]}>
        <button onClick={onclick} className={style[1]}>
          <img src={src} className={`${style[2]} ${style[3]}`} alt={alt} draggable={false} />
        </button>
      </div>
    )
  }

  return (
    <button className={`${style[0]} ${style[1]}`} onClick={onclick}>
      {children}
    </button>
  )
}
