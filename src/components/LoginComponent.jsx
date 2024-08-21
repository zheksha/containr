import { Button } from '@/components/ui/button'
import { LoginImage } from './LoginImage'
import { useState, useEffect } from 'react'
import LoginTurtle from './LoginTurtle'

export function LoginComponent() {
  const templates = [
    ['Contain[R]', 'Store', 'Your', '💎'],
    ['Contain[R]', 'Throw', 'Your', '💩'],
  ]

  const [text, setText] = useState(templates[0])

  useEffect(() => {
    let index = 0

    const interval = setInterval(() => {
      index = (index + 1) % templates.length
      setText(templates[index])
    }, 3000)

    // Clearing the interval on component unmount
    return () => clearInterval(interval)
  }, [templates])

  return (
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
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
            <Button variant="outline" className="w-full">
              Login with Github
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
