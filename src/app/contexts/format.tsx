import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface PageFormatContextType {
  isMobile: boolean;
}

const PageFormatContext = createContext<PageFormatContextType | undefined>(undefined);

interface PageFormatProviderProps {
  children: ReactNode;
}

export const PageFormatProvider: React.FC<PageFormatProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PageFormatContext.Provider value={{ isMobile }}>
      {children}
    </PageFormatContext.Provider>
  );
};

export const usePageFormat = (): PageFormatContextType => {
  const context = useContext(PageFormatContext);
  if (context === undefined) {
    throw new Error('useMobile must be used within a MobileProvider');
  }
  return context;
};