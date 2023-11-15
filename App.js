import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'child' }, [React.createElement('h1', {}, 'i am gradson h1 tag'), React.createElement('h2', {}, 'i am gradson h2 tag')]));

var root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);

//jsx (Transpiled before it reaches the JS) -Parcel - Babel
//JSX => React.createElement => ReactElement-JS Object => HTML(render)
const jsx = <h1>Through JSX elements</h1>;
console.log(jsx);
root.render(jsx);