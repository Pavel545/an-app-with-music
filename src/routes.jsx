import { Routes, Route } from 'react-router-dom'
import { NotFound } from './pages/not-found/NotFound'
import { ProtectedRoute } from './components/Protectet-eout/Protectet-eout'
import Main from './components/Main/Main'
import { RegistrationModal } from './components/Registration/Registration'
import { Authorization } from './components/Authorization/Authorization'
import { usePostLoginMutation } from './servises/serv'
import { useState } from 'react'
import { useEffect } from 'react'

export const AppRoutes = () => {
    const [data, { error, isLoading }] = usePostLoginMutation()

    const [user, setUser] = useState(false)

    function login(params) {
        data(params)
        console.log(isLoading)
        
    }
    useEffect(() => {
        if (!isLoading){
            if (!error ) {
                return setUser(true)
    
    
            } else {
                return setUser(false)
    
            }
        }
        
    })
    return (
        <Routes>
            <Route
                path="/"
                element={<Authorization onAuthButtonClick={login} />}
            />
            <Route path="/registration" element={<RegistrationModal />} />

            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route
                    path="/content"
                    element={
                        <div>
                            <Main />
                        </div>
                    }
                />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
