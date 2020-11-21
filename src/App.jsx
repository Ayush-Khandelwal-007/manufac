import './App.css';
import { useState, useEffect } from 'react'
import * as ROUTES from './routes/Routes';
import SignUpPage from './pages/SignUpPage';
import DashBoard from './pages/DashBoard'
import SignInPage from './pages/SignInPage'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import { auth } from './Firebase'
import Footer from './components/Footer';
import { ContextProvider } from './contexts/ProfileContext';

function App() {
    document.title = "Manufac";
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser);
                setUser(authUser);
            } else {
                setUser(null);
            }
        })
        return () => {
            unsubscribe();
        }
    }, [user])

    return (<div className="App" >
        <ContextProvider value={user} >
            <Router >
                <Header />
                <div className="RenderScreen" >
                    <Switch >
                        <Route exact path={ROUTES.HOME} >
                            {user ? <Redirect to={ROUTES.SIGN_IN} /> : <DashBoard />}
                        </Route>
                        <Route exact path={ROUTES.DASHBOARD} >
                            {user ? <DashBoard /> : <Redirect to={ROUTES.SIGN_IN} />}
                        </Route>
                        <Route exact path={ROUTES.SIGN_IN} >
                            {user ? <Redirect to={ROUTES.DASHBOARD} /> : <SignInPage />}
                        </Route>
                        <Route exact path={ROUTES.SIGN_UP} >
                            {user ? <Redirect to={ROUTES.DASHBOARD} /> : <SignUpPage />}
                        </Route>
                    </Switch>
                </div>
                <Footer profileinfo={user} />
            </Router>
        </ContextProvider> </div>
    );
}

export default App;