import { useState } from 'react';
import classes from './Start.module.scss';
import logo from '../../assets/xp_logo.png';
import StartApplications from '../StartApplications/StartApplications';
// import startApps from '../../data/applications';
import startApps from '../../data/applications.json';
import StartProfile from '../StartProfile/StartProfile';
import LogOff from '../LogOff/LogOff';
const Start = () => {
  //   console.log(startApps);
  const [isShown, setIsShown] = useState(false);
  const toggleVisibility = () => {
    setIsShown(!isShown);
  };
  return (
    <>
      <button
        onClick={() => {
          toggleVisibility();
        }}
        className={classes.button}
      >
        <img className={classes.logo} src={logo} alt="" />
        start
      </button>
      {isShown && (
        <div className={classes.menu}>
          <StartProfile data={startApps} />
          <StartApplications data={startApps} />
          <LogOff data={startApps} />
        </div>
      )}
    </>
  );
};

export default Start;
