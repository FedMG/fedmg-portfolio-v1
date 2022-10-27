import { useContext } from 'react'
import { SkillsContext } from './CreateSkill'

export const CreateShape = ({ data }) => {
  const skill = useContext(SkillsContext)
  const { styles, svg, title, path } = data ?? skill

  return (
    <div className={styles?.div}>
      <svg
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
