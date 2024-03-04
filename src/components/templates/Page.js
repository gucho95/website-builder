import { Header, Footer } from 'components/organisms';

const classes = {
  root: 'min-h-screen flex flex-col',
  header: 'flex-shrink-0 bg-pink-500',
  main: 'flex-1',
  footer: 'flex-shrink-0 bg-red-500',
};

const Page = ({ children: Content }) => (
  <div className={classes.root}>
    <Header className={classes.header} />
    <main children={Content} className={classes.main} />
    <Footer className={classes.footer} />
  </div>
);

export default Page;
