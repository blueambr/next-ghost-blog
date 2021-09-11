import 'normalize.css/normalize.css';
import 'styles/global.scss';
import { SidebarVisibilityProvider } from 'contexts/SidebarVisibility';

const App = ({ Component, pageProps }) => (
  <SidebarVisibilityProvider>
    <Component {...pageProps} />
  </SidebarVisibilityProvider>
);

export default App;
