import React from "react";
import { MdArticle } from "react-icons/md";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Header({ toggleAddModal }) {
  const navigate = useNavigate();
  const openAddModal = () => toggleAddModal(true);

  const redirectToHome = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <div onClick={redirectToHome}>
        <MdArticle />
        <span>ArticlesNow</span>
      </div>
      <div onClick={openAddModal}>
        <BsFillPlusCircleFill />
      </div>
    </div>
  );
}

export default Header;
