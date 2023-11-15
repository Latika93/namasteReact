const parent = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'child' }, [React.createElement('h1', {}, 'i am gradson h1 tag'), React.createElement('h2', {}, 'i am gradson h2 tag')]));

var root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);