import "@testing-library/jest-dom";
import { server } from "./src/api-mocks/server";

window.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: () => null,
  disconnect: () => null,
  unobserve: () => null,
}));

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  vi.clearAllMocks();
});
