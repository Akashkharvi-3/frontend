/* import React, { useState } from 'react';
import Circle from './Circle/Circle';

const CircleContainer = () => {
  const [circles, setCircles] = useState([]);

  const addCircle = () => {
    const newCircle = {
      size: '150px',
      color: 'green',
      key: circles.length,
    };

    setCircles([...circles, newCircle]);
  };

  return (
    <div>
      <button onClick={addCircle}>Add Circle</button>
      <div>
        {circles.map(circle => (
          <Circle {...circle} />
        ))}
      </div>
    </div>
  );
};

export default CircleContainer;
 */
import React, { useState } from 'react';

function App() {
  const [circles, setCircles] = useState([]);

  const addCircle = () => {
    const newCircle = <div style={{  width: '150px', height: '150px', borderRadius: '50%', backgroundColor: 'red', margin: '10px' }}></div>;
    setCircles([...circles, newCircle]);
  }

  return (
    <div style={{ display: "flex"  }}>
      <button onClick={addCircle}>Add Circle</button>
      {circles.map((circle, index) => <div key={index}>{circle}</div>)}
    </div>
  );
}

export default App;
