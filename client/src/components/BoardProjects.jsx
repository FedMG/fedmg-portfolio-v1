import { Buttons } from "./Buttons";

const Figure = ({ data: { caption, srcSet, source } }) => {
  return (
    <figure className="project-figure">
      <div className="figure-ar-box-container">
      <div className="figure-aspect-ratio-box">
        <img
          src={source}
          alt={caption + " image"}
          className="figure-aspect-ratio"
          srcSet={srcSet}
          sizes="(max-width: 767px) 450px, (min-width: 768px) and (max-width: 1023px) 1000px, 1500px"
        />
      </div>
      </div>
      <figcaption className="project-figcaption" translate="no">
        <span className="project-span-caption">{caption}</span>
      </figcaption>
    </figure>
  )
}

export const BoardProjects = ({ data }) => {
  return data.map(({ id, board }) => (
    <div key={id} className="project-board">
      {board.map(({ id, buttons, ...props }) => (
        <div key={id} className="project-cards">
          <Figure data={props} />
          <div className="project-btn-container grid anchor-svg-container">
            <Buttons
              data={buttons}
              style={[
                "button-visibility anchors",
                "button project-btn-dimensions",
              ]}
            />
          </div>
        </div>
      ))}
    </div>
  ))
}
