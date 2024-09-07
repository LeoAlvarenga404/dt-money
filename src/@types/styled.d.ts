// esse arquivo faz com que, ao estilizar um component com uma cor, ela mostre as cores que tem no defaulTheme

import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme


declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
