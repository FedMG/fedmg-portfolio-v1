export const CreateShape = ({ data }) => {
  return (
    <div className={data["styles"]["div"]}>
      <svg
        data-name={data["dname"]}
        xmlns={data["xml"]}
        viewBox={data["vbox"]}
        preserveAspectRatio={data["preAR"]}
      >
        {data["path"].map(({id, d, opacity}) => (
          <path key={id} d={d} opacity={opacity || 1} className={data["styles"]["path"]} />
        ))}
      </svg>
    </div>
  );
};
