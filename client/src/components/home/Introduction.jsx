import { Typography } from "@/components/Typography";
import { Typewriter, TypewriterSplit } from "./Typewriter";

export const Introduction = () => {
  return (
    <div className="span-container">
      <div className="span-container__subcontainer">
        <Typography style='first-phrase' as='span'>
          Hi, I am{' '}
          <Typography style='first-phrase__span' as='span'>
            Federico
          </Typography>
        </Typography>
        <Typography style='second-phrase' as='span'>
          A{' '}
          <Typography style='second-phrase__span' as='span'>
            Fullstack Developer
          </Typography>
        </Typography>
        <Typography style="third-phrase" as="span">
          And a passionate of the{" "}
          <Typography style="third-phrase__span" as="span">
            Information Technology World
          </Typography>
        </Typography>
      </div>
    </div>
  );
};
