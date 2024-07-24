import { React, useState } from "react";
import "./Content.scss";
import { AiOutlineHome,AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import {BsPersonWorkspace} from "react-icons/bs"

const Content = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
      <div className="nav">        
        <a
          href="#Profile"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome style={{ color: "white" }} />
        </a>
        <a
          href="#Education"
          onClick={() => setActiveNav("#education")}
          className={activeNav === "#education" ? "active" : ""}
        >
          <BiBook style={{ color: "white" }} />
        </a>
        <a
          href="#Projects"
          onClick={() => setActiveNav("#project")}
          className={activeNav === "#project" ? "active" : ""}
        >
          <AiOutlineFundProjectionScreen style={{ color: "white" }} />
        </a>
        <a
          href="#Experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BsPersonWorkspace style={{ color: "white" }} />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <MdMessage style={{ color: "white" }} />
        </a>
      </div>
    );
  };

export default Content