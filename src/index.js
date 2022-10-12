import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './GlobalStyle/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'
import Content from './pages/Content/Content'
import { store } from './store/selectors/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyle />
                <Content />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
