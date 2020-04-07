import { configuration } from '../src/config';

import { theme } from './theme';


export const config = configuration({
  src: {
    base: 'samples/md'
  },
  dest: {
    bundle: 'assets',
    styles: 'assets',
    html: 'dist',
  },
  theme,
  page: {
    title: {
      base: 'Codedoc Sample'
    },
    favicon: '/favicon.ico'
  },
  misc: {
    github: {
      user: 'CONNECT-platform',
      repo: 'codedoc',
    },
    gitter: {
      room: 'connectv/community',
    },
  }
});