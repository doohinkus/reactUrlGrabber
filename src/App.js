import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
//grab parameter from url
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
class App extends Component {
  render() {
    var postcard = getParameterByName('postcard');
    return (
      <div className="App">
        <MetaTags>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@baresolerunner"></meta>
          <meta name="twitter:creator" content="@doohinkus"></meta>
          <meta name="twitter:title" content="Check out this amazing postcard"></meta>
          <meta name="twitter:description" content="One of many photo postcards in our international postcard exchange."></meta>
          <meta name="twitter:image" content={postcard}></meta>
        </MetaTags>
        {postcard}
      </div>
    );
  }
}

export default App;
