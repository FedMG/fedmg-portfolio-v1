import React from 'react';

const container = {
  minWidth: '100%',
  transition: '0.3s ease all',
  zIndex: '10',
  position: 'relative',
  margin: '15px',
  // overflow: 'hidden',
};

const containerStyle = {
  minWidth: '100%',
  transition: '0.3s ease all',
  // zIndex: '10',
  position: 'relative',
  margin: '20px',
  // border: '1px solid red',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gridGap: '10px 10px',
  // overflow: 'hidden',
};

const containerElement = {
  // width: '100%',
  verticalAlign: 'top',
  // overflow: 'hidden',
};

const imgStyle = {
  width: '100%',
  verticalAlign: 'top',
  // overflow: 'hidden',
};

export const CreateProject = ({ data }) => {
  return (
    // <div style={container}>
    <>
      {data.map(({ id, captions, sources, links }) => (
        <div key={id} style={containerStyle}>
          {captions.map((caption, index) => (
            <div style={containerElement} key={caption}>
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
      {/* // </div> */}
    </>
  );
};
