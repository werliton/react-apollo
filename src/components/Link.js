import React, { Component } from "react";

export const Link = ({ link }) => (
  <>
    <div>
      {link.description} ({link.url})
    </div>
  </>
);
