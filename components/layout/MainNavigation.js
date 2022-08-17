import Link from "next/link";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>PhDestination</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Destination</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Destination</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
