function countryToLiveIn(language, isisland, population, country) {
  if (language === "english" && !isisland && population < 50)
    console.log(`You should live in ${country}`);
  else
    console.log(`${country} does not meet
  your criteria`);
}
countryToLiveIn(`english`, false, 329.5, `america`);
countryToLiveIn(`english`, false, 49, `america2`);
