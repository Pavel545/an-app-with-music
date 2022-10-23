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
    const [login, { error, isLoading }] = usePostLoginMutation()

    const [user, setUser] = useState(false)

    function log(params) {
        login(params)
        console.log(isLoading)
        {
            // if (error === undefined) {
            //     return setUser(false)

            // } else {
            //     return setUser(true)

            // }
        }
    }
    useEffect(() => {
        if (isLoading ===false){
            if (error === undefined) {
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
                element={<Authorization onAuthButtonClick={log} />}
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
