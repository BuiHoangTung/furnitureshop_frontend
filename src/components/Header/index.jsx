// import CartIcon from '@/components/Icons/CartIcon';
import styles from './styles.module.scss';
import CartIcon from '@icons/svgs/cart.svg?react';
import AccountIcon from '@icons/svgs/account.svg?react';
import NotificationIcon from '@icons/svgs/notification.svg?react';
import { dataMenu } from './constraint';
import clsx from 'clsx';
import { furnitureshop } from '@images/index';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [focusStatus, setFocusStatus] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 110);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header id='header'>
        <div className='global-section-inner'>
          <div
            className={
              scrolled ? styles.scrolledHeaderInner : styles.headerInner
            }
          >
            <div className={styles.headerInnerWrapper}>
              <Link to='/' className={styles.logo}>
                <img src={furnitureshop} alt='furnitureshop' />
              </Link>

              <div className={styles.searchBarWrapper}>
                <div
                  className={clsx(styles.searchBarInnerWrapper, {
                    [styles.focusedInput]: focusStatus,
                  })}
                >
                  <input
                    type='text'
                    id='search-input-in'
                    placeholder='Search for products and ideas'
                    autoComplete='off'
                    onFocus={() => {
                      setFocusStatus(true);
                    }}
                    onBlur={() => setFocusStatus(false)}
                  />

                  <button className={styles.searchBtn} disabled={focusStatus}>
                    <i className={clsx('fa-brands', 'fa-sistrix')}></i>
                  </button>
                </div>
              </div>

              <div className={styles.headerActions}>
                <div className={styles.cartWrapper}>
                  <a href='#' className={styles.iconButton} aria-label='Cart'>
                    <CartIcon width={25} height={25} color={'currentColor'} />
                  </a>
                  <div className={styles.cartDot}></div>
                </div>
                <a href='#' className={styles.iconButton} aria-label='Account'>
                  <NotificationIcon
                    width={25}
                    height={25}
                    color={'currentColor'}
                  />
                </a>
                <a href='#' className={styles.iconButton} aria-label='Account'>
                  <AccountIcon width={25} height={25} color={'currentColor'} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav className={styles.navBar}>
          <div className='global-section-inner'>
            <ul className={styles.menuItemWrapper}>
              {dataMenu.map((item, idx) => {
                return (
                  <li
                    className={styles.menuItemWrapperInner}
                    key={idx}
                    onMouseEnter={() => {
                      setHoverIndex(idx);
                    }}
                    onMouseLeave={() => {
                      setHoverIndex(-1);
                    }}
                  >
                    <a
                      href={item.href}
                      className={styles.menuItem}
                      target='self'
                    >
                      <span>{item.content}</span>
                    </a>

                    {hoverIndex === idx && (
                      <div className={styles.antPopOver}>
                        <div className={styles.antPopOverInnerWrapper}>
                          <p>Hello {item.content}</p>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
