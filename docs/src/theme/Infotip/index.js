import React from 'react';
import { useState } from 'react';
import Note from '@theme-original/Admonition/Icon/Note';

import Tip from '@theme/Infotip/Tip';

export default function Infotip({ children, tip = "" }) {
  const [showPopover, setShowPopover] = useState(false);
  let innerContent = [];
  let popoverContent = null;

  // Convert the children to an array of children
  const childrenArray = React.Children.toArray(children);

  // Find the Info component
  childrenArray.forEach((child) => {
    if (React.isValidElement(child) && child.type === Tip) {
      popoverContent = child.props.children;
    } else {
      innerContent.push(child);
    }
  });

  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setShowPopover(true)}
      onMouseLeave={() => setShowPopover(false)}
    >
      {innerContent}
      <span style={{ display: "inline-block" }}>
        <Note
          style={{
            verticalAlign: "top",
            height: "0.75em",
            width: ".75em",
            fill: "var(--ifm-color-primary)",
          }}
        />
      </span>
      {showPopover && (
        <span
          style={{
            position: "absolute",
            top: "0",
            transform: "translateY(-110%)",
            background: "var(--ifm-color-primary)",
            zIndex: 1000,
            whiteSpace: "nowrap",
            padding: "2px 8px",
            color: "var(--ifm-font-color-base-inverse)",
            fontSize: "0.75rem",
          }}
        >
          {popoverContent === null ? tip : popoverContent}
        </span>
      )}
    </span>
  );
}
