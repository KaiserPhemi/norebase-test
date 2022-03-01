// react libraries
import React from "react";

// styles
import "./navlink.scss";

// interface
interface INavLink {
  item: {
    text: string;
    component: any;
  };
}

/**
 * Reusable nav link item
 * @param param0
 * @returns
 */
const NavLink = ({ item }: INavLink) => {
  return (
    <div className="list-item">
      <span>{item.component}</span>
      <span>{item.text}</span>
    </div>
  );
};

export default NavLink;
