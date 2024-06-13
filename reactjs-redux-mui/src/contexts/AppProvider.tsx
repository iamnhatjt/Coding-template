import { Provider } from "react-redux";
import { store } from "../store/configureStore";
import { I18nextProvider } from "react-i18next";
import i18n from "../utils/i18n";
import ThemeProvider from "./ThemeProvider";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default AppProvider;
