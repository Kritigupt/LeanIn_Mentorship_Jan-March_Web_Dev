import classes from "./Header.module.css";
const Header = ({ moneySpent }) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>Expense Tracker</div>
      <div className={classes.total}>{moneySpent} Rs</div>
    </div>
  );
};
export default Header;