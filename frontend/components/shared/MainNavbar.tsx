import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import Logo from './Logo';

import { initialize, firstInitial } from '../../utils/initialize';

import { useTutor } from '../../context/tutor.context';

const MainNavbar = ({ props }: { props?: React.ReactNode }) => {
  const { email, loggedIn } = useTutor();

  return (
    <AppBar elevation={0} {...props}>
      <Toolbar sx={{ height: 64 }}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        {loggedIn && (
          <Link href={`tutors/${encodeURIComponent(email)}`}>
            <Typography
              variant="h6"
              color="secondary"
              component="h2"
              style={{ cursor: 'pointer', paddingRight: '36px' }}
            >
              Tutor {initialize(email)}
            </Typography>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
