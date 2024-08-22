import { Button } from '@/components/ui/button'
// import { LoginImage } from './LoginImage'
import LoginTurtle from './LoginTurtle'
import { handleGoogleSignIn, handleLogout } from '../firebase/auth'
import { Navigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

export function LoginComponent() {
  const user = useSelector((state) => state.user)
  const onBtnClick = () => {
    handleGoogleSignIn()
  }

  return user?.isLoggedIn ? (
    <Navigate to="/"></Navigate>
  ) : (
    <div className="w-full h-svh lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Please sign in using below platforms
            </p>
          </div>
          <div className="grid gap-4">
            <Button variant="outline" className="w-full" onClick={onBtnClick}>
              Login with Google
            </Button>
            <Button variant="outline" className="w-full">
              Login with Github
            </Button>
            <Button variant="outline" className="w-full" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block text-left text-slate-900 w-200">
        <LoginTurtle
          spheres={[
            [1, 'orange', 0.05, [-4, -1, -1]],
            [0.75, 'hotpink', 0.1, [-4, 2, -2]],
            [1.25, 'aquamarine', 0.2, [4, -3, 2]],
            [1.5, 'lightblue', 0.3, [-4, -2, -3]],
            [2, 'pink', 0.3, [-4, 2, -4]],
            [2, 'skyblue', 0.3, [-4, 2, -4]],
            [1.5, 'orange', 0.05, [-4, -1, -1]],
            [2, 'hotpink', 0.1, [-4, 2, -2]],
            [1.5, 'aquamarine', 0.2, [4, -3, 2]],
            [1.25, 'lightblue', 0.3, [-4, -2, -3]],
            [1, 'pink', 0.3, [-4, 2, -4]],
            [1, 'skyblue', 0.3, [-4, 2, -4]],
          ]}
        />

        {/* <LoginImage texts={text} /> */}
      </div>
    </div>
  )
}
