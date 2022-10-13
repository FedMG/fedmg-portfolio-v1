import React from 'react';

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gridGap: '10px 10px',
  minWidth: '100%',
  transition: '0.3s ease all',
};

const imgStyle = {
  width: '100%',
  verticalAlign: 'top',
};

export const CreateProject = ({ data }) => {
  return (
    <>
      {data.map(({ id, captions, sources, links }) => (
        <div key={id} style={containerStyle}>
          {captions.map((caption, index) => (
            <div key={caption}>
              <figure>
                <img src={sources[index]} style={imgStyle} />
                <figcaption>{caption}</figcaption>
              </figure>
              <div>
                <a href={links[index][0]}>
                  <button>GitHub</button>
                </a>
                <a href={links[index][1]}>
                  <button>StackBlitz</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
