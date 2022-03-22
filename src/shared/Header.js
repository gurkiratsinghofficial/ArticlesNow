import React, { useCallback } from "react";
import { MdArticle } from "react-icons/md";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Header({ toggleAddModal }) {
  const navigate = useNavigate();

  const openAddModal = useCallback(
    () => toggleAddModal(true),
    [toggleAddModal]
  );
  const redirectToHome = useCallback(() => navigate("/"), [navigate]);
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
