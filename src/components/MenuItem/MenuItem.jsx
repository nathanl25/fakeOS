import classes from './MenuItem.module.scss';

const MenuItem = ({ appData }) => {
  // {
  //   "name": "Internet",
  //   "description": "Internet Explorer",
  //   "size": "large",
  //   "bold": true,
  //   "url": "../assets/ie.png"
  // },
  // const appList = startApps.map((app) => {
  //   return (
  //     <div key={app.name} className={`desktop__app ` + app.size}>
  //       <img className="icon" src={app.url} alt={app.name} />
  //       <h2 className={`name` + (bold === true) ? 'bold' : ''}>{app.name}</h2>
  //       {app.description && <p>{app.description}</p>}
  //     </div>
  //   );
  let appSize = '';
  switch (appData.size) {
    case 'large':
      appSize = classes.large;
      break;
    case 'medium':
      appSize = classes.medium;
      break;
    case 'small':
      appSize = classes.small;
      break;
    case 'x_large':
      appSize = classes.x_large;
      break;
  }
  // if (appData.size === 'large') {
  //   appSize = classes.large;
  // }
  // console.log(appData);
  //
  return (
    <div className={`${appSize} ${appData.reversed && classes.reversed}`}>
      {/* <div */}
      {/* //   className={`${ */}
      {/* appData.size === 'large' ? classes.large : classes.medium */}
      {/* } ${appData.reversed && classes.reversed}`} */}
      {/* > */}
      <img src={appData.url} alt={appData.name} className={`${classes.icon}`} />
      <div>
        <p className={appData.bold && classes.bold}>{appData.name}</p>
        {appData.description && <p>{appData.description}</p>}
      </div>
    </div>
  );
};

export default MenuItem;
