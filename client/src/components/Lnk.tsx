import React from 'react';

const Lnk: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ children, onClick, ...props }) => (
  <a
    href="?"
    onClick={(e) => {
      e.preventDefault();
      if (onClick) onClick(e);
    }}
    {...props}
  >
    {children}
  </a>
);

export default Lnk;
