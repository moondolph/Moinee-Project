import React from 'react';

const MainArticle2 = ({path, text}) => {
  return (
    <div className="row main-div bd-example mb-5 mt-5">
      <div className="col-6 mainArticle-div float-start">
        <h1 className="main-text">
          {text}
        </h1>
      </div>
      <div className="col-6 mainArticle float-start">
        <img
          alt="introduce"
          width="600px"
          height="600px"
          src= {path}
        />
      </div>
    </div>
  );
}

export default MainArticle2;