import { countries_data } from "../../data/countries.js";

export function countriesSortedByPopulation() {
  const countries = countries_data
    .map((c) => {
      return {
        country: c.name,
        capital: c.capital,
        population: c.population,
      };
    })
    .filter((c) => {
      if (c.population && c.capital) return c;
    });
  //  .sort((a, b) => {
  //    return b.population - a.population;
  //  });

  //return countries;
  const world = countries.reduce((acum, c) => {
    return acum + c.population;
  }, 0);

  countries.push({
    country: "World Total",
    capital: "World",
    population: world,
  });

  countries.sort((a, b) => {
    return b.population - a.population;
  });

  return countries;
}

export function countriesSortedByArea() {
  const countries = countries_data
    .map((c) => {
      return {
        country: c.name,
        area: c.area,
      };
    })
    .filter((c) => {
      if (c.area) return c;
    })
    .sort((a, b) => {
      return b.area - a.area;
    });

  return countries;
}

export function mostSpokenLanguages() {
  const allLanguages = countries_data.reduce((acc, country) => {
    return acc.concat(country.languages);
  }, []);

  const languageCounts = allLanguages.reduce((acc, language) => {
    acc[language] = (acc[language] || 0) + 1;
    return acc;
  }, {});

  const languageArray = Object.entries(languageCounts).map(
    ([language, count]) => {
      return { language, count };
    }
  );

  return languageArray.sort((a, b) => b.count - a.count);
}
