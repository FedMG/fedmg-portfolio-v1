import { Typography } from "../items/Typography.jsx";
import { CreateShape } from "../iterators/CreateShape.jsx";
import { triangle } from "../refs/shapes.js";
import { MailTo } from "../items/contact/Mailto.jsx";

export const Contact = () => {
  return (
    <div id="Contact" className="section">
      <div className="section-content">
        <Typography as="h2" style="subtitle-section">
          <Typography style="span-subtitle">Contact</Typography> me
        </Typography>
        <div className="contact__content">
          <div className="contact__mailto-bk">
            <MailTo />
          </div>
        </div>
      </div>
      <CreateShape data={triangle.contact} />
    </div>
  );
};
