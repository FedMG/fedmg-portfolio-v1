import React from 'react';

export const CreateProject = ({ data }) => {
  return (
    <>
      {data.map(({ id, caption, source, alt, link }) => (
        <div key={id}>
          <figure>
            <img src={source} alt={alt} />
            <figcaption>{caption}</figcaption>
          </figure>
          <div>
            <a href={link}>
              <button>GitHub</button>
            </a>
            <a href={link}>
              <button>StackBlitz</button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};
