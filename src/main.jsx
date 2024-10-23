import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './Component/reduxApp.jsx'
// import App from './Component/reduxToolKit.jsx';
import App from './Component/reduxToolKitApi.jsx';

import './index.css'
import { Provider } from 'react-redux'
import store from './Store/reduxToolKitStore.js'

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
