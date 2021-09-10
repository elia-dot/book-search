import React, { useState } from 'react';
import {BsBook} from 'react-icons/bs'

import useWidth from '../utils/useWidth';

const Card = ({
  book: {
    volumeInfo: { title, imageLinks, description },
  },
}) => {
  const { width } = useWidth();
  const [show, setShow] = useState(false);
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : ''})`,
        }}
      > {!imageLinks && <BsBook/>}</div>
      <div className="card-description">
        <h4>{title}</h4>
        {width > 600 ? (
          <p className="book-description">
            {description
              ? description
              : 'There is no description for this title'}
          </p>
        ) : (
          <>
            {show && (
              <div className="book-description">
                {' '}
                {description
                  ? description
                  : 'There is no description for this title'}
              </div>
            )}
            <p
              className="show-description"
              onClick={() => setShow((prev) => !prev)}
            >{`${show ? 'hide' : 'show'} description`}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
