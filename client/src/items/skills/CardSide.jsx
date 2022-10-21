export const CardSide = ({ styles, children }) => {
  return (
    <div className={styles[0]}>
      <div className={styles[1]}>{children}</div>
    </div>
  );
};
