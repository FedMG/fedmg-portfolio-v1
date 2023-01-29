import { useCardEffectRef } from "@/hooks/useCardEffect";
import { Typography } from "./utils/Typography";

export const Board = () => {
  const cardRef = useCardEffectRef(true, true);

  return (
    <div className="about-board-container grid-center">
      <div className="about-board">
        <div className="about-card bk-drop" ref={cardRef}>
          <svg
            className="svg-about-board"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.706,15.708l-5,5a1,1,0,0,1-1.414-1.414L19.586,16H2a1,1,0,0,1-1-1V4A1,1,0,0,1,2,3H12a1,1,0,0,1,0,2H3v9H19.586l-3.293-3.293a1,1,0,0,1,1.414-1.414l5,5A1,1,0,0,1,22.706,15.708Z" />
          </svg>
          <div className="about-board-side board-front flex-center">
            <Typography as="p" style="about-text">
              <span className="hr" />
              I am a self-taught Software developer &#128187;, and
              a student at UBA of Data science degree &#128202;
              <br />
              <br />I love to get along with curious and passionate people,
               with whom there can be a mutual learning that allows us to grow and improve.
              <br />
              <br />
              &#127793; Some of my hobbies are studying a new language like
              Japanese, and spending time with my family.
              <span className="hr" />
            </Typography>
          </div>

          <div className="about-board-side board-back flex-center">
            <Typography as="p" style="about-text">
              <strong style={{ fontSize: '115%' }}>Soft-skills</strong>
              <span className="hr" />
              &#x1F9E0;
              <strong> Growth mindset</strong>
              <br />
              I like to think big, how to make something better, how to go
              further.
              <br />
              <br />
              &#x1F4AA;
              <strong> Work ethic</strong>
              <br />
              I love to keep learning new things and keep improving to give the
              best result.
              <br />
              <br />
              &#x1F91D;	
              <strong> Team player attitude</strong>
              <br />I love to work side by side and help whoever needs it to
              achieve a common goal.
              <span className="hr" />
            </Typography>
          </div>

          <div className="background-effect container" />
        </div>
      </div>
    </div>
  );
};
