import { Button } from '@/components/ui/button'
import { handleGoogleSignIn } from '../firebase/auth'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function LoginComponent() {
  const user = useSelector((state) => state.user)
  const location = useLocation()

  const onBtnClick = async () => {
    await handleGoogleSignIn()
  }

  return user?.isLoggedIn ? (
    <Navigate to={location.state?.from || '/'} replace />
  ) : (
    <div className="w-full h-svh lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Please sign in using the platforms below
            </p>
          </div>
          <div className="grid gap-4">
            <Button variant="outline" className="w-full" onClick={onBtnClick}>
              Login with Google
            </Button>
            <Button variant="outline" className="w-full">
              Login with Github
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block text-left text-slate-900 w-200">
        {/* Optional component rendering */}
      </div>
    </div>
  )
}
