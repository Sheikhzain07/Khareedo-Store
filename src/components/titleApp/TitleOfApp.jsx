import React from "react";

function TitleOfApp(props) {
  document.title = "Khareedo -" + props.title;
  return <div>{props.children}</div>;
}

export default TitleOfApp;
