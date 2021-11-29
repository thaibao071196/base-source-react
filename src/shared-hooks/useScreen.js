import { useMediaQuery } from 'react-responsive';

const useScreen = () => {
  const results = {
    isDesktop: false,
    isTablet: false,
    isMobile: false,
  };
  results.isDesktop = useMediaQuery({ minWidth: 1200 });
  results.isTablet = useMediaQuery({ maxWidth: 1200 });
  results.isMobile = useMediaQuery({ maxWidth: 600 });
  return results;
};

export { useScreen };
