export const bootstrap = async () => {
  const { worker } = await import("./api-mocks/browser");

  await worker.start();
};
