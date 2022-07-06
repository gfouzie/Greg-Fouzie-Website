import "./experience.scss";
import "../../styles.scss";
import React from "react";
import { kontek, vivid, changeroom, cryptoparrot } from "./data.ts";
import cryptoparrot_pic from "./images/cryptoparrot_temp.png";
import vivid_pic from "./images/vivid_temp.png";

export default function Modals() {
  return (
    <section id="experience" class="container">
      <h1>Experience</h1>
      <div class="card-wrapper">
        <article class="card">
          <header class="card-thumb">
            <a>
              <img src={vivid_pic} />
            </a>
          </header>
          <div class="card-body">
            <h2 class="card-title">
              <a href={vivid.link}>{vivid.company}</a>
            </h2>
            <div class="card-subtitle">{vivid.title}</div>
            <p class="card-description">{vivid.description}</p>
            <p className="card-preview">{vivid.preview}</p>
          </div>
        </article>

        <article class="card">
          <header class="card-thumb">
            <a>
              <img src={cryptoparrot_pic} />
            </a>
          </header>
          <div class="card-body">
            <h2 class="card-title">
              <a href={kontek.link}>{kontek.company}</a>
            </h2>
            <div class="card-subtitle">{kontek.title}</div>
            <p class="card-description">{kontek.description}</p>
            <p className="card-preview">{kontek.preview}</p>
          </div>
        </article>

        <article class="card">
          <header class="card-thumb">
            <a>
              <img src={vivid_pic} />
            </a>
          </header>
          <div class="card-body">
            <h2 class="card-title">
              <a href={changeroom.link}>{changeroom.company}</a>
            </h2>
            <div class="card-subtitle">{changeroom.title}</div>
            <p class="card-description">{changeroom.description}</p>
            <p className="card-preview">{changeroom.preview}</p>
          </div>
        </article>

        <article class="card">
          <header class="card-thumb">
            <a>
              <img src={cryptoparrot_pic} />
            </a>
          </header>
          <div class="card-body">
            <h2 class="card-title">
              <a href={cryptoparrot.link}>{cryptoparrot.company}</a>
            </h2>
            <div class="card-subtitle">{cryptoparrot.title}</div>
            <p class="card-description">{cryptoparrot.description}</p>
            <p className="card-preview">{cryptoparrot.preview}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
