import { useCarouselEffect } from "@/hooks/useCarouselEffect";
import { Button } from "./utils/Button";

const Text = ({ children, header, icon = null }) => {
  return (
    <p className="text">
      {header && (
        <span className="text-header">
          {icon}
          <strong className="strong">{header}</strong>
        </span>
      )}
      {children}
    </p>
  );
};

const BoardContent = ({ children, header }) => {
  return (
    <div className="about-text-container">
      <div className='about-text'>
      {header && <strong style={{ fontSize: "115%" }}>{header}</strong>}
      <span className="hr" />
      {children}
      <span className="hr" />
      </div>
    </div>
  );
};

const classes = ["slider-buttons-bk", "slider-buttons", "slider-icon-button"];

const Carousel = ({ children }) => {
  const {
    methods: { previous, next },
    ref: slider,
  } = useCarouselEffect(400);

  return (
    <div className="slider-bk">
      <Button
        onclick={previous}
        src="https://img.icons8.com/material/96/000000/chevron-left--v1.png"
        alt="backward"
        style={classes}
      />

      <div className="slider-element-bk">
        <div ref={slider} className="slider-element">
          {children}
        </div>
      </div>

      <Button
        onclick={next}
        src="https://img.icons8.com/material/96/000000/chevron-right--v1.png"
        alt="forward"
        style={classes}
      />
    </div>
  )
}

export const Board = () => {
  return (
    <div className="about-board-container grid-center">
          <Carousel>
            <BoardContent>
              <Text>
                Self-taught Software Developer &#128187; and currently pursuing a bachelor's degree in Data Science &#128202; at the University of Buenos Aires.
              </Text>
              <Text>
                With more than a year and a half of experience with information technologies.
              </Text>
              <Text>
                I love meeting curious and passionate people, with whom there can be mutual learning that allows us to grow and improve.
              </Text>
              <Text>
                &#127793; Some of my hobbies are studying a new language like Japanese, and spending time with my family.
              </Text>
            </BoardContent>

            <BoardContent header="Soft-skills">
              <Text icon="&#x1F9E0;" header="Growth mindset">
                I like to think big, how to make something better, how to go
                further.
              </Text>

              <Text icon="&#x1F4AA;" header="Work ethic">
                I love to keep learning new things and keep improving to give
                the best result.
              </Text>

              <Text icon="&#x1F91D;" header="Team player attitude">
                I love to work side by side and help whoever needs it to achieve
                a common goal.
              </Text>
            </BoardContent>
          </Carousel>
        </div>
  )
}
