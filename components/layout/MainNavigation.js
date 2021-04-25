import Link from 'next/link';

import classes from './MainNavigation.module.css';


function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>
        <img src="https://cdn.shopify.com/s/files/1/0022/5011/3123/files/BP_LOGO_x300.png?v=1601240965" height="auto" width="20%"></img>
      </div>
      <nav>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link href='/'>All Products</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
