import { createContext, useState } from 'react';

const SidebarVisibilityContext = createContext(false, null);

export const SidebarVisibilityProvider = ({ children }) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);

  return (
    <SidebarVisibilityContext.Provider value={[isSidebarHidden, setIsSidebarHidden]}>
      {children}
    </SidebarVisibilityContext.Provider>
  );
};

export default SidebarVisibilityContext;
