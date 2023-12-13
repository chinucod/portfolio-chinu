import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import react from "../images/react.png";
import boot from "../images/boot.png";
import sass from "../images/sass.png";
import py from "../images/py.png";
import git from "../images/git.png";
import js from "../images/js.png";
import mongo from "../images/mongo.png";
import sql from "../images/sql.png";
import photo from "../images/photo.png";
import powerquery from "../images/PowerQuery.png";
import powerbi from "../images/power-bi.png";
import dax from "../images/dax.png";
import excel from "../images/excel.png";
const Skills = () => {
  return (
    <div id="skills">
      <div className="skills">
        <div className="skill">
          <div className="title">
            <h1>Skills</h1>
            <hr></hr>
          </div>
          <div className="box">
            <div className="icon">
              <div className="image">
                <img src={powerbi}></img>
              </div>
              <p>Power BI</p>
            </div>
            <div className="icon">
              <div className="image">
                <img src={powerquery}></img>
              </div>
              <p>Power Query</p>
            </div>
            <div className="icon">
              <div className="image">
                <img src={dax}></img>
              </div>
              <p>DAX</p>
            </div>
            <div className="icon">
              <div className="image">
                <img src={excel}></img>
              </div>
              <p>Excel</p>
            </div>
            <div className="icon">
              <div className="image">
                <img src={html}></img>
              </div>
              <p>Html</p>
            </div>
            <div className="icon">
              <div className="image">
                <img src={css}></img>
              </div>
              <p>Css</p>
            </div>
            <div className="icon">
              <div className="image">
                <img src={react}></img>
              </div>
              <p>React</p>
            </div>
            <div className="icon">
              <div className="image">
                <img src={sass}></img>
              </div>
              <p>Sass</p>
            </div>
            <div className="icon">
              <div className="image">
                <img src={js}></img>
              </div>
              <p>Javascript</p>
            </div>
            <div className="icon">
              <div className="image">
                <img src={py}></img>
              </div>
              <p>Python</p>
            </div>
            <div className="icon">
              <div className="image">
                <img src={boot}></img>
              </div>
              <p>Material UI</p>
            </div>
            <div className="icon">
              <div className="image">
                <img src={git}></img>
              </div>
              <p>Git</p>
            </div>
            <div className="icon">
              <div className="image">
                <img src={mongo}></img>
              </div>
              <p>MongoDB</p>
            </div>
            <div className="icon">
              <div className="image">
                <img src={sql}></img>
              </div>
              <p>Sql</p>
            </div>
            <div className="icon">
              <div className="image">
                <img src={photo}></img>
              </div>
              <p>Photoshop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
