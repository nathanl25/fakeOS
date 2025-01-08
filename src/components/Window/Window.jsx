import classes from './Window.module.scss';
import minimise from '../../assets/minimize.png';
import maximise from '../../assets/maximize.png';
import exit from '../../assets/exit.png';
import RpsApplication from '../RpsApplication/RpsApplication';
const Window = () => {
  return (
    <>
      <div className={classes.window}>
        <section className={classes.top_bar}>
          <h3 className={classes.status_bar}>RPS 101</h3>
          <div className={classes.button_container}>
            <button className={classes.bar_button}>
              <img
                className={classes.icon}
                src={minimise}
                alt="minimise button"
              />
            </button>
            <button className={classes.bar_button}>
              <img
                className={classes.icon}
                src={maximise}
                alt="maximise button"
              />
            </button>
            <button className={classes.bar_button}>
              <img className={classes.icon} src={exit} alt="exit button" />
            </button>
          </div>
        </section>
        <RpsApplication />
      </div>
    </>
  );
};

export default Window;
