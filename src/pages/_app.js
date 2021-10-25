import 'styles/global/index.scss';
import 'styles/index.scss';
import { SidebarVisibilityProvider } from 'contexts/SidebarVisibility';

const App = ({ Component, pageProps }) => (
  <SidebarVisibilityProvider>
    <Component {...pageProps} />
  </SidebarVisibilityProvider>
);

export default App;
