'use strict';

export function createElementResult(resultSection, banner, btn, fn) {  
    resultSection.innerHTML = "";
    if (btn.id === "btnPopulation") {
      banner.textContent = "Los 15 países más habitados en el mundo";
      const worldPopulation = fn()[0].population;
      fn().forEach((c, index) => {
        if (index >= 15) return;
  
        const divRow = document.createElement("div");
        divRow.classList.add("row");
        resultSection.appendChild(divRow);
        const divNameCountrie = document.createElement("div");
        const divBar = document.createElement("div");
        const divNumber = document.createElement("div");
        const divContentBar = document.createElement("div");
        divNameCountrie.classList.add("divName"); //col1
        divBar.classList.add("divBars"); //col2
        divNumber.classList.add("divNum"); //col3
        divContentBar.classList.add("divContentBar"); //col content
  
        divRow.appendChild(divNameCountrie);
        divRow.appendChild(divContentBar);
        divContentBar.appendChild(divBar);
        divRow.appendChild(divNumber);
  
        divNameCountrie.textContent = c.country.toUpperCase();
        divNumber.textContent = `${new Intl.NumberFormat("es-MX").format(
          c.population
        )} personas`;
  
        const percent = Math.round((c.population / worldPopulation) * 100);
  
        divBar.style.width = `${percent}%`;
        divBar.style.height = "20px";
        divBar.style.backgroundColor = "#2e86c1";
      });
    } else {    
      btn.id === "btnLangs"
        ? (banner.textContent = "Lista de idiomas oficiales")
        : (banner.textContent = "Lista de las 10 mayores áreas geográficas por país");
  
      fn().forEach( (lang, index) => {
        if (btn.id === "btnArea" && index >= 10) return;
        const divRow = document.createElement("div");
        divRow.classList.add("row");
        resultSection.appendChild(divRow);
        const divNameCountrie = document.createElement("div");
        const divBar = document.createElement("div");
        const divNumber = document.createElement("div");
        const divContentBar = document.createElement("div");
        divNameCountrie.classList.add("divName"); //col1
        divBar.classList.add("divBars"); //col2
        divNumber.classList.add("divNum"); //col3
        divContentBar.classList.add("divContentBar"); //col content
  
        divRow.appendChild(divNameCountrie);
        divRow.appendChild(divContentBar);
        divContentBar.appendChild(divBar);
        divRow.appendChild(divNumber);
  
        if (btn.id === "btnLangs") {
          divNameCountrie.textContent = lang.language.toUpperCase();
  
          lang.count === 1
            ? (divNumber.textContent = `${lang.count} país`)
            : (divNumber.textContent = `${lang.count} países`);
  
          divBar.style.width = `${lang.count}%`;
        } 
        else {
          divNameCountrie.textContent = lang.country.toUpperCase(); 
          divNumber.textContent = `${lang.area} km2`;
          const earth = 510100000;        
          const percent = Math.round( ( lang.area / earth ) *100);
          divBar.style.width = `${percent}%`;
        }
  
        divBar.style.height = "20px";
        divBar.style.backgroundColor = "#2e86c1";
      });
    }    
    
    resultSection.classList.remove('fading');
    void resultSection.offsetWidth; // Trigger reflow
    resultSection.classList.add('fading');

  }