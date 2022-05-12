import "../styles/globals.css";
import { SnackbarProvider } from 'notistack';
import { useEffect } from 'react';
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center'}}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SnackbarProvider>
  );
}

export default wrapper.withRedux(MyApp);