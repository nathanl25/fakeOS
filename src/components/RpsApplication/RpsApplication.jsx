import classes from './RpsApplication.module.scss';
import { useEffect, useState } from 'react';
import { fetchData } from './util';
import rps from '../../data/rps.json';
const RpsApplication = () => {
  const [outcome, setOutcome] = useState('');
  const [newSelection, setNewSelection] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const submitForm = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };
  useEffect(() => {
    setVisibility(false);
    fetchData(input)
      .then((result) => setOutcome(result))
      .catch(() => setError(true))
      .finally(() => {
        setVisibility(true);
      });
  }, [input]);
  useEffect(() => {
    console.log(outcome);
    return setNewSelection(false);
  }, [outcome]);
  return (
    <div className={classes.app}>
      <h1 className={classes.title}>RPS 101</h1>

      <h2>Rock Paper Scissors 101</h2>
      <select onChange={submitForm} name="rps">
        <option value="Rock">Rock</option>
        <option value="Paper">Paper</option>
        <option value="Scissors">Scissors</option>
      </select>
      {visibility && (
        <p>
          Outcome winner {outcome.winner} Outcome Loser {outcome.loser}{' '}
          selection {input}
        </p>
      )}
    </div>
  );
};

export default RpsApplication;
