import { createContext, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const SidebarVisibilityContext = createContext(false, null);

export const SidebarVisibilityProvider = ({ children }) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const isTouch = useMediaQuery({ query: '(max-width: 1024px)' });

  // We only want to set this once: when the website is loaded/reloaded
  useEffect(() => {
    setIsSidebarHidden(!!isTouch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SidebarVisibilityContext.Provider value={[isSidebarHidden, setIsSidebarHidden]}>
      {children}
    </SidebarVisibilityContext.Provider>
  );
};

export default SidebarVisibilityContext;
