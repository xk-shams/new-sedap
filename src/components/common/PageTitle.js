import React from "react";

function PageTitle(props) {
  const { title, subtitle, id } = props;
  return (
    <div>
      <h1>
        {title} {id}
      </h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default PageTitle;
