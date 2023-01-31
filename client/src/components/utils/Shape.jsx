import { memo } from 'react'

export const Shape = memo(({ data: { styles, path } }) => {
  return (
    <div className={styles[0]}>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
      >
        {path.map(({ id, d, opacity }) => (
          <path
            key={id}
            d={d}
            opacity={opacity || 1}
            className={styles[1]}
          />
        ))}
      </svg>
    </div>
  )
})
