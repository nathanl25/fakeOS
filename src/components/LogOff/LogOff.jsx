import classes from './LogOff.module.scss';
import MenuItem from '../MenuItem/MenuItem';

const LogOff = ({ data }) => {
  const logOutBtns = data.filter((item) => {
    return item.size === 'small';
  });
  return (
    <>
      <section className={classes.log_out}>
        {logOutBtns.map((btn) => (
          <MenuItem key={btn.name} appData={btn} />
        ))}
      </section>
    </>
  );
};

export default LogOff;
