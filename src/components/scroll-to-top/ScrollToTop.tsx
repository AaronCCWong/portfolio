import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  children?: React.ReactElement;
};

export const ScrollToTop: React.FunctionComponent<Props> = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return props.children || null;
};
