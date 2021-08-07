const getRandomArrayItem = (arr) => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const randomNum = getRandomInt(arr.length);
  return arr[randomNum];
};

export default getRandomArrayItem;
