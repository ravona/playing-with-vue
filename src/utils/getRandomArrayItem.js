const getRandomArrayItem = (arr) => {
  if (!arr) {
    console.error("Error getting random number from given array", arr);
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const randomNum = getRandomInt(arr.length);
  return randomNum;
};

export default getRandomArrayItem;
