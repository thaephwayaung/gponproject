import React, { useEffect } from "react";
import { useLocation, useNavigate, matchRoutes } from "react-router-dom";

import { routes } from "src/routing/routes";

const NavigationManager = ({ children }: { children: React.ReactElement }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function shellNavigationHandler(event: Event) {
      const pathname = (event as CustomEvent<string>).detail;
      if (
        location.pathname === pathname ||
        !matchRoutes(routes, { pathname })
      ) {
        return;
      }
      navigate(pathname);
    }
    window.addEventListener("[shell] navigated", shellNavigationHandler);

    return () => {
      window.removeEventListener("[shell] navigated", shellNavigationHandler);
    };
  }, [location]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("[authApp] navigated", { detail: location.pathname })
    );
  }, [location]);

  return children;
};

export default NavigationManager;
