import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./shared/Router";
import "bootstrap/dist/css/bootstrap.min.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <></>
    </QueryClientProvider>
  );
}

export default App;
