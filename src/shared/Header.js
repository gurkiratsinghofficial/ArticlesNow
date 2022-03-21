import React from "react";
import { MdArticle } from "react-icons/md";
import { BsFillPlusCircleFill } from "react-icons/bs";

function Header({ toggleAddModal }) {
  const openAddModal = () => toggleAddModal(true);

  return (
    <div className="header">
      <div>
        <MdArticle />
        <span>ArticleNow</span>
      </div>
      <div onClick={openAddModal}>
        <BsFillPlusCircleFill />
      </div>
    </div>
  );
}

export default Header;
