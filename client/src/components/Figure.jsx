import { useContext } from "react";
import { DataContext } from "./BoardProjects";

export const Figure = ({ idx }) => {
  const board = useContext(DataContext);
  const { caption, srcSet, source } = board[idx];
  return (
    <figure className="project-figure">
      <img
        src={source}
        alt={caption + " image"}
        className="project-image"
        srcSet={srcSet}
        sizes="(max-width: 767px) 500px, (min-width: 768px) and (max-width: 1023px) 1000px, 1500px"
      />
      <figcaption
        className="project-figcaption"
        translate="no"
      >
        <span className='project-span-caption'>
        {caption}
        </span>
      </figcaption>
    </figure>
  );
};
