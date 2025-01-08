import classes from './StartProfile.module.scss';
import MenuItem from '../MenuItem/MenuItem';
const StartProfile = ({ data }) => {
  const profile = data.filter((item) => {
    return item.size === 'x_large';
  });
  return (
    <>
      <section className={classes.profile}>
        {profile.map((prof) => (
          <MenuItem key={prof.name} appData={prof} />
        ))}
      </section>
    </>
  );
};

export default StartProfile;
