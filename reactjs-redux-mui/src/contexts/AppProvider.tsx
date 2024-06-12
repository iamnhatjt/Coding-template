import { Provider } from "react-redux";
import { store } from "../store/configureStore";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
