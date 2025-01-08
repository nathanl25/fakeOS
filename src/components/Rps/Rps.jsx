import scissors from '../../assets/rps.png';
import classes from './Rps.module.scss';
import { useState } from 'react';
import Window from '../Window/Window';

const Rps = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openApp = () => {
    // console.log('you double clicked');
    // if (isOpen === true) {
    //   console.log('app already open');
    //   return;
    // }
    // console.log('app opening');
    // setIsOpen(true);
    setIsOpen(!isOpen);
  };
  //   const closeApp = () => {
  //     setIsOpen(false);
  //   };
  return (
    <>
      <div
        onClick={() => {
          openApp();
        }}
        className={classes.desktop_app}
      >
        <img className={classes.icon} src={scissors} alt="desktop icon" />
        <p className={classes.title}>RPS 101</p>
      </div>
      {/* <p className={classes.hidden}>Hidden box</p> */}
      {isOpen && <Window />}
    </>
  );
};

export default Rps;
