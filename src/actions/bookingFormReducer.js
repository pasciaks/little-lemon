let localAvailableTimes = ["17:00", "17:30", "18:00", "18:30"];

export const loadInitialState = (date) => ({
  availableTimes: localAvailableTimes,
});

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  console.log("fetchAPI", date);
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

fetchAPI(new Date());

// loadInitialState();

// "ID" + Date.now() + Math.floor(Math.random() * 1000);

const updateTimes = (state, payload) => ({
  ...state,
  availableTimes: payload,
});

export const bookingFormReducer = (state, { type, payload }) => {
  switch (type) {
    case "setAvailableTimes":
      console.log(state, type, payload);
      return updateTimes(state, payload);
    case "reset": {
      return { ...loadInitialState(new Date()) };
    }
    default:
      break;
  }
};
