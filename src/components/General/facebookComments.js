import React, { useEffect } from 'react';
import data from '../../data';

function Comments() {
  const { facebookComments } = data;
  const comments = facebookComments;
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="bg-light">
      <div className="fb-comments" data-href={comments.dataHref} data-width={comments.dataWidth} data-numposts={comments.dataNumposts} data-colorscheme={comments.dataColorScheme} />
    </div>
  );
}

export default Comments;
