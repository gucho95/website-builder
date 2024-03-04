const classes = {
  root: 'h-screen w-full border-2 border-blue-dark flex flex-col overflow-hidden',
  main: 'flex-1 flex overflow-hidden',
  sidebarWrapper: 'overflow-y-auto overflow-x-hidden shadow-inset',
  contentWrapper: 'flex-1 overflow-y-auto overflow-x-hidden',
};

const Dashboard = ({ components }) => {
  const { Header, Sidebar, Content } = components;
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.main}>
        <div className={classes.sidebarWrapper} children={<Sidebar />} />
        <div className={classes.contentWrapper} children={<Content />} />
      </div>
    </div>
  );
};

export default Dashboard;
