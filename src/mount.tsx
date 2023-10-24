import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";

import { RoutingStrategy } from "./routing/__type";
import { createRouter } from "./routing/create-router";
import store from "./store/store";

import { CommonErrorBox as ErrorBoxProvider } from "src/components/ModalBox/ErrorBox/CommonErrorBox";

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}) => {
  const router = createRouter({
    strategy: routingStrategy,
    initialPathname,
  });
  const root = createRoot(mountPoint);
  root.render(
    <Provider store={store}>
      <ErrorBoxProvider>
        <RouterProvider router={router} />
      </ErrorBoxProvider>
    </Provider>
  );

  return () => queueMicrotask(() => root.unmount());
};

export { mount };
