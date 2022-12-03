export const Shape = ({ data: { styles, svg, title, path } }) => {
  return (
    <div className={styles?.div}>
      <svg
        fill={svg?.fill}
        className={styles?.svg}
        data-name={svg?.dname}
        xmlns={svg?.xmlns}
        viewBox={svg?.vbox}
        role={svg?.role}
        preserveAspectRatio={svg?.preAR}
      >
        {title && <title>{title}</title>}

        {path.map(({ id, d, opacity }) => (
          <path
            key={id || title}
            d={d}
            opacity={opacity || 1}
            className={styles?.path}
          />
        ))}
      </svg>
    </div>
  )
}
