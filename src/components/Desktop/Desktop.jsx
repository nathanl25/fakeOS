import classes from './Desktop.module.scss';
import bliss from '../../assets/bliss.webp';
import Taskbar from '../Taskbar/Taskbar';
import Rps from '../Rps/Rps';
const Desktop = () => {
  return (
    <>
      <div className={classes.desktop}>
        <div className={classes.wallpaper}>
          <img
            className={classes.wallpaper__image}
            src={bliss}
            alt="xp_background"
          />
        </div>
        <Rps />
        <Taskbar></Taskbar>
      </div>
    </>
  );
};

export default Desktop;
