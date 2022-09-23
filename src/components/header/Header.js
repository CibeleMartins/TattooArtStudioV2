// modules
import * as React from 'react';
import Box from '@mui/material/Box';


// images
import login from '../../assets/loginIcon.svg';
import register from '../../assets/registerIcon.svg';

// styles
import styles from './Header.module.css';

export default function Header() {

  return (
    <Box
    className={styles.header}>

        <Box>
            <img className={styles.icons} alt='Login' src={login} />
        </Box>

        <Box>
            <img className={styles.icons} alt='Login' src={login} />
        </Box>

        <Box>
            <img className={styles.icons} alt='Register' src={register} />
        </Box>

    </Box>
  );
}