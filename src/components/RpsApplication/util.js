import rps from '../../data/rps.json';

export const fetchData = async (input) => {
  const opponent = rps.filter((val) => {
    return val !== input;
  });
  const oppSelection = opponent[Math.floor(Math.random() * 100)];
  console.log(opponent);
  const response = await fetch(
    `https://rps101.pythonanywhere.com/api/v1/match?object_one=${input}&object_two=${oppSelection}`
  );
  const data = await response.json();
  return data;
};
