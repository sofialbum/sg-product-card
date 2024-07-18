// // import * as React from 'react';
// import * as ReactDOM from 'react-dom';


// describe('it', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     // ReactDOM.render(<Thing />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
// });

import * as ReactDOM from 'react-dom/client';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    
    // Para React 18, se utiliza createRoot para renderizar
    const root = ReactDOM.createRoot(div);
    // root.render(<Thing />);

    // Para desmontar el componente
    root.unmount();
    
    document.body.removeChild(div);
  });
});

