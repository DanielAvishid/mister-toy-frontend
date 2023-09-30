import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/style/main.scss'
import { FiShoppingCart, FiUser } from "react-icons/fi";


import { store } from './store/store'
import { Home } from './pages/Home'
import { AppHeader } from './cmps/AppHeader'
import { About } from './pages/About';
import { ToyIndex } from './pages/ToyIndex';
import { ToyDetails } from './pages/ToyDetails';
import { ToyEdit } from './pages/ToyEdit';

export function App() {

  return (
    <Provider store={store}>
      <Router>
        <section className='app main-layout'>
          <AppHeader />
          <main>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<About />} path="/about" />
              <Route element={<ToyIndex />} path="/toy" />
              <Route element={<ToyEdit />} path="/toy/edit" />
              <Route element={<ToyEdit />} path="/toy/edit/:toyId" />
              <Route element={<ToyDetails />} path="/toy/:toyId" />
            </Routes>
          </main>
        </section>
      </Router>
    </Provider>

  )
}
