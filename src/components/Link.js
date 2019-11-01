import React from "react";

export const Link = ({ link }) => (
  <>
    <div>
      <li>{link.description} ({link.url})</li>
    </div>
  </>
);
