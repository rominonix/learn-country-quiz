const featureFlag = {
  improvedScoring: {
    value: true,
    desription: "This is improvedScoring",
  },
  tieScreen: {
    value: false,
    desription: "This is tieScreen",
  },
  improvedHeader: {
    value: true,
    desription: "this is Header",
    
  },
};

Object.freeze(featureFlag);

if (localStorage.getItem("featureflag")) {
  const currentScore = JSON.parse(localStorage.getItem("featureflag"));
  localStorage.setItem(
    "featureflag",
    JSON.stringify(Object.assign({}, { ...featureFlag, ...currentScore }))
  );
} else {
  localStorage.setItem("featureflag", JSON.stringify(featureFlag));
}
