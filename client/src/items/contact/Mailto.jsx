import { useState } from "react";
import { Button } from "../Button.jsx";
import { Typography } from "../Typography.jsx";
import { Mail } from "./Mail.jsx";
import { structure } from "../../refs/message-structure.js";

export const MailTo = () => {
  const [message, setMessage] = useState(structure);

  const getForm = (e) => {
    e.preventDefault();

    if (!message.subject || !message.body) {
      setMessage({
        ...message,
        error: "Please, to submit a message complete all fields!",
      });
    }
  };

  const getSubject = (e) => {
    setMessage({ ...message, subject: e.target.value, error: "" });
  };

  const getBody = (e) => {
    setMessage({ ...message, body: e.target.value, error: "" });
  };

  return (
    <form className="form" onSubmit={getForm}>
      <label for="subject"></label>
      <input
        className="form__input"
        id="subject"
        type="text"
        onChange={getSubject}
        placeholder="Subject"
        title="example: inquery for services"
      />
      <label for="body"></label>
      <textarea
        className="form__textarea"
        id="body"
        onChange={getBody}
        placeholder="Type a mail"
      />
      <div className="form__button-bk">
        <div className="form__msg-error-bk">
          <Typography style="form__msg-error">
            {message.error ? message.error : null}
          </Typography>
        </div>
        <Mail
          email="federico.mgonzalia@gmail.com"
          subject={message.subject}
          body={message.body}
        >
          <Button style="button" name="Generate" />
        </Mail>
      </div>
    </form>
  );
};
