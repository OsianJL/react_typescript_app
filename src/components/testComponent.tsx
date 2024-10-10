import React from 'react';

interface HelloProps {
  name: string;
  surname: string; 
  getPerson: () => void;
}

const Hello: React.FC<HelloProps> = ({ name, surname, getPerson }) => { // Cambiado para usar el prop surname
  return (
    <>
      <h1>
        Hello, {name} {surname}!
      </h1>
      <button onClick={getPerson}>click here </button>
    </>
  );
};

export default Hello;
