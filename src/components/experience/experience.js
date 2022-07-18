import "./experience.scss";
import "../../styles.scss";
import React from "react";
import { kontek, vivid, changeroom, cryptoparrot } from "./data.ts";
import cryptoparrot_pic from "./images/cryptoparrot_tiny.png";
import vivid_pic from "./images/vivid_tiny.png";
import changeroom_pic from "./images/changeroom_tiny.png";
import kontek_pic from "./images/kontek_tiny.png";

export default function Modals() {
  return (
    <section id="experience" className="container">
      <h1>Experience</h1>
      <div className="card-wrapper">
        <article className="card">
          <header className="card-thumb">
            <div>
              <img alt="vivid seats img" src={vivid_pic} />
            </div>
          </header>
          <div className="card-body">
            <h2 className="card-title">
              <a href={vivid.link}>{vivid.company}</a>
            </h2>
            <div className="card-subtitle">{vivid.title}</div>
            <p className="card-description">{vivid.description}</p>
            <p className="card-preview">{vivid.preview}</p>
          </div>
        </article>

        <article className="card">
          <header className="card-thumb">
            <div>
              <img alt="kontek img" src={kontek_pic} />
            </div>
          </header>
          <div className="card-body">
            <h2 className="card-title">
              <a href={kontek.link}>{kontek.company}</a>
            </h2>
            <div className="card-subtitle">{kontek.title}</div>
            <p className="card-description">{kontek.description}</p>
            <p className="card-preview">{kontek.preview}</p>
          </div>
        </article>

        <article className="card">
          <header className="card-thumb">
            <div>
              <img alt="changeroom pic" src={changeroom_pic} />
            </div>
          </header>
          <div className="card-body">
            <h2 className="card-title">
              <a href={changeroom.link}>{changeroom.company}</a>
            </h2>
            <div className="card-subtitle">{changeroom.title}</div>
            <p className="card-description">{changeroom.description}</p>
            <p className="card-preview">{changeroom.preview}</p>
          </div>
        </article>

        <article className="card">
          <header className="card-thumb">
            <div>
              <img alt="cryptoparrot img" src={cryptoparrot_pic} />
            </div>
          </header>
          <div className="card-body">
            <h2 className="card-title">
              <a href={cryptoparrot.link}>{cryptoparrot.company}</a>
            </h2>
            <div className="card-subtitle">{cryptoparrot.title}</div>
            <p className="card-description">{cryptoparrot.description}</p>
            <p className="card-preview">{cryptoparrot.preview}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
