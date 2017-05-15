import React, { Component } from 'react';
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
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@nytimes"></meta>
        <meta name="twitter:creator" content="@SarahMaslinNir"></meta>
        <meta name="twitter:title" content="Parade of Fans for Houston’s Funeral"></meta>
        <meta name="twitter:description" content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here."></meta>
        <meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg"></meta>

        {postcard}
      </div>
    );
  }
}

export default App;
