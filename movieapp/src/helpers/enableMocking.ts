export async function enableMocking() {
  if (import.meta.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("../mocks/browser");
  return worker.start();
}
