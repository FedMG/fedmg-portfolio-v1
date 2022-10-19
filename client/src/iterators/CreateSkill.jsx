import { CardSide } from "../items/about/CardSide.jsx";

export const CreateSkill = ({ data }) => {
  return (
    <div className="skill-cards">
      {data.map(({ title, d, styles, role, vb, xml }) => (
        <div className={styles["card"]}>
          <CardSide styles={styles["front"]}>
            <svg className={styles["svg"]} role={role} viewBox={vb} xmlns={xml}>
              <title>{title}</title>
              <path className={styles["path"]} d={d} />
            </svg>
          </CardSide>
          <CardSide styles={styles["back"]}>something</CardSide>
        </div>
      ))}
    </div>
  );
};
