"use strict";

import {
  countriesSortedByPopulation,
  mostSpokenLanguages,
  countriesSortedByArea,
} from "./services/countryService.js";

import { createElementResult } from "./utils/createComponent.js";

const btnPopulation = document.querySelector("#btnPopulation");
const resultSection = document.querySelector("#results");
const btnLangs = document.querySelector("#btnLangs");
const banner = document.querySelector("h2");
const btnArea = document.querySelector("#btnArea");

btnPopulation.addEventListener("click", () => {
  createElementResult(
    resultSection,
    banner,
    btnPopulation,
    countriesSortedByPopulation
  );
});

btnLangs.addEventListener("click", () => {
  createElementResult(resultSection, banner, btnLangs, mostSpokenLanguages);
});

btnArea.addEventListener("click", () => {
  createElementResult(resultSection, banner, btnArea, countriesSortedByArea);
});
