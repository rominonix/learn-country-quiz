const featureFlags = {
  improvedScoring: {
    value: false,
    desription: "This is improvedScoring",
  },
  tieScreen: {
    value: false,
    desription: "This is tieScreen",
  },
  minusScoring:{
    value:false,
    desription:"This is minusScoring"
  },
  improvedHeader: {
    value: false,
    desription: "this is Header", 
  },
  improvedFlag: {
    value: false,
    description: "This shows more flags in random order"
  }
};

Object.freeze(featureFlags);

if (localStorage.getItem("featureFlags")) {
  const currentScore = JSON.parse(localStorage.getItem("featureFlags"));
  localStorage.setItem(
    "featureFlags",
    JSON.stringify(Object.assign({}, { ...featureFlags, ...currentScore }))
  );
} else {
  localStorage.setItem("featureFlags", JSON.stringify(featureFlags));
}

