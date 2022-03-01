// react libraries
import React from "react";

// styles
import './main_btn.scss';

// interface
interface IBtn {
  btnClass: string;
  btnText: string;
}

/**
 * Main button component
 * @param param0
 * @returns
 */
const MainBtn = ({ btnClass, btnText }: IBtn) => {
  return <button className={`btns ${btnClass}`}>{btnText}</button>;
};

export default MainBtn;
