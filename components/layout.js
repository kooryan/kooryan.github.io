import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Hello from '../sections/hello';

const name = 'Ryan Koo';
export const siteTitle = 'Ryan Koo';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container} >
      <Head>
        <link rel="icon" href="/logork2.0.png" />
      </Head> 
      <header className={styles.header}>
          {/* <>
            <div>
              <center>
            <h6 className={utilStyles.headingLg} style={{fontWeight: 300}}> 
              {name}
            </h6>
              <a>about</a> / <a>blog</a> / <a>github</a>

              </center>
            </div>
          </> */}
      </header>
      <main>{children}</main>
      <footer>
        <p>Contact me: koo00017 (at) umn (at) edu</p>
      </footer>
    </div>
  );
}