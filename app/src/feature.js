const featureFlags = {
  tieScreen: {
    value: false,
  },
  minusScoring: {
    value: false,
  },
  improvedHeader: {
    value: false,
  },
  improvedFlag: {
    value: false,
  },
  randomQuestions: {
    value: false,
  },
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
