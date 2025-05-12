import React, { Suspense } from "react";
import { HeadProvider } from "react-head";
import { Provider } from "react-redux";

const AppProvider = ({children}) => {
  return (
    // <Provider>
      <HeadProvider>
        <Suspense fallback={<h2>Loading...</h2>}>
            {children}
        </Suspense>
      </HeadProvider>
    // </Provider>
  );
};

export default AppProvider;
