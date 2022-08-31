import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

export default function Footer() {
  return (
    <div className="Footer">
      <footer className="App-footer text-center">
        This project is{" "}
        <a href="https://github.com/KaterinaSlezakova/shopping-list">
          open-sourced on <FaGithub />
        </a>{" "}
        and{" "}
        <a href="https://shopping-list-bud.netlify.app/">
          hosted on <SiNetlify />
        </a>
        .
      </footer>
    </div>
  );
}
