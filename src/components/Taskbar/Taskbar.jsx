import classes from './Taskbar.module.scss';
import Time from '../Time/Time';
import Start from '../Start/Start';
const Taskbar = () => {
  return (
    <div className={classes.taskbar}>
      <Start></Start>
      <Time></Time>
    </div>
  );
};

export default Taskbar;
