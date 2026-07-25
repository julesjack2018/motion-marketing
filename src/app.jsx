// app.jsx — mounts the current page component with Nav + Footer

(function () {
  function App() {
    var Page = window.__Page;
    if (!Page) {
      return React.createElement('div', {style: {padding: '120px 24px', textAlign: 'center', color: '#fff'}},
        'Page component not loaded.'
      );
    }
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Nav, null),
      React.createElement(Page, null),
      React.createElement(Footer, null)
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(
    React.createElement(App, null)
  );
})();
