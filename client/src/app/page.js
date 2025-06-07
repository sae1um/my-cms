"use client"

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import { Lock } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'

function Home() {
  const [password, setPassword] = useState("");
  const {handleLogin, error, isLoading} = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl">Personal CMS</CardTitle>
          <CardDescription>Enter your password to access the dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleLogin(password)
          }} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Button type="submit" className="w-full cursor-pointer" disabled={isLoading}>
              {isLoading ? <span className='loading loading-spinner '></span> : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Home