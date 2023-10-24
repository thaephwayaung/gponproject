import("./mount").then(
  ({ mount }) => {
  const localRoot = document.getElementById("auth-app");

  mount({
    mountPoint: localRoot as HTMLElement,
    routingStrategy: "browser",
  });
});

export {};
