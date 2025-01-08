import classes from './StartApplications.module.scss';

import MenuItem from '../MenuItem/MenuItem';
const StartApplications = ({ data }) => {
  const largeApps = data.filter((app) => {
    return app.size === 'large';
  });
  const mediumApps = data.filter((app) => {
    return app.size === 'medium';
  });
  return (
    <>
      <section className={classes.container}>
        <div className={classes.lhs}>
          {largeApps.map((app) => (
            <MenuItem key={app.name} appData={app} />
          ))}
        </div>
        <div className={classes.rhs}>
          {mediumApps.map((app) => (
            <MenuItem key={app.name} appData={app} />
          ))}
        </div>
      </section>
    </>
  );
};
export default StartApplications;
