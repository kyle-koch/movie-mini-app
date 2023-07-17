import React from 'react';

const movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];

function Main() {
  const movieTitles = [];
  for (let i = 0; i < movies.length; i++) {
    movieTitles.push(<li key={i}>{movies[i].title}</li>);
  }
  return (
    <ul>
      {movieTitles}
    </ul>
  );
}

export default Main;
