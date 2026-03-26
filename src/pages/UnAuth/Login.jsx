import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

/* ─── Icons ─── */
const IconMail = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
)

const IconLock = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
)

const IconEye = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const IconEyeOff = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

const IconSpinner = () => (
  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
)

const IconGoogle = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
    <path
      d="M21.805 10.023H12v3.977h5.617C17.1 15.953 15.193 17.25 12 17.25c-3.314 0-6-2.686-6-6s2.686-6 6-6c1.494 0 2.86.549 3.9 1.45l2.97-2.97C17.205 2.107 14.76 1 12 1 5.925 1 1 5.925 1 12s4.925 11 11 11c6.336 0 10.5-4.455 10.5-10.72 0-.718-.065-1.41-.195-2.077z"
      fill="#4285F4"
    />
    <path
      d="M3.153 7.345l3.46 2.54C7.553 8.104 9.639 6.75 12 6.75c1.494 0 2.86.549 3.9 1.45l2.97-2.97C17.205 2.107 14.76 1 12 1c-3.84 0-7.17 2.07-8.847 5.345z"
      fill="#EA4335"
    />
    <path
      d="M12 23c2.76 0 5.205-1.05 7.005-2.76l-3.24-2.73C14.76 18.45 13.47 19 12 19c-3.18 0-5.88-2.145-6.615-5.025L2 16.655C3.735 20.415 7.575 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M21.805 10.023H12v3.977h5.617c-.39 1.08-1.11 1.98-2.067 2.58l3.24 2.73c1.89-1.755 3.21-4.35 3.21-7.567 0-.718-.065-1.41-.195-2.077z"
      fill="#FBBC05"
    />
  </svg>
)

/* ─── Validation ─── */
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

/* ════════════════════════════════════════════════════════
   Main Component
════════════════════════════════════════════════════════ */
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!isValidEmail(email)) e.email = 'Enter a valid email address.'
    if (password.length < 8) e.password = 'At least 8 characters required.'
    return e
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) {
      setErrors(e)
      return
    }
    setErrors({})
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1700))
    setLoading(false)
    toast.success('Signed in successfully', {
      description: 'Welcome back! Redirecting to your dashboard.',
    })
  }

  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex size-9 items-center justify-center rounded-lg">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 3h2v-2h-2zm0 4h2v-2h-2zm4-4h-2v2h2zm-4 0v-2h-2v2z" />
            </svg>
          </div>
          <span className="text-base font-semibold text-foreground">
            Sign In.
          </span>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <CardDescription>
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                    <IconMail />
                  </span>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setErrors((er) => ({ ...er, email: '' }))
                    }}
                    className={cn(
                      'pl-9',
                      errors.email &&
                        'border-destructive focus-visible:ring-destructive/20'
                    )}
                  />
                </div>
                {errors.email && (
                  <p className="text-[11px] text-destructive">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Button
                    type="button"
                    variant="link"
                    className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                  >
                    Forgot password?
                  </Button>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                    <IconLock />
                  </span>
                  <Input
                    id="password"
                    type={showPw ? 'text' : 'password'}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setErrors((er) => ({ ...er, password: '' }))
                    }}
                    className={cn(
                      'pl-9 pr-10',
                      errors.password &&
                        'border-destructive focus-visible:ring-destructive/20'
                    )}
                  />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-foreground"
                        onClick={() => setShowPw((v) => !v)}
                      >
                        {showPw ? <IconEyeOff /> : <IconEye />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      {showPw ? 'Hide password' : 'Show password'}
                    </TooltipContent>
                  </Tooltip>
                </div>
                {errors.password && (
                  <p className="text-[11px] text-destructive">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2.5">
                <Checkbox
                  id="remember"
                  checked={remember}
                  onCheckedChange={setRemember}
                />
                <Label
                  htmlFor="remember"
                  className="text-sm font-normal text-muted-foreground cursor-pointer"
                >
                  Remember me for 30 days
                </Label>
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <span className="flex items-center gap-2">
                    <IconSpinner /> Signing in…
                  </span>
                ) : (
                  'Sign in'
                )}
              </Button>

              {/* Divider */}
              <div className="relative">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                  or
                </span>
              </div>

              {/* OAuth */}
              <Button type="button" variant="outline" className="w-full gap-2">
                <IconGoogle />
                Continue with Google
              </Button>
            </form>

            {/* Sign up */}
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Don't have an account?{' '}
              <Button variant="link" className="h-auto p-0 text-xs">
                Create one
              </Button>
            </p>
          </CardContent>
        </Card>

        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          By signing in, you agree to our{' '}
          <Button variant="link" className="h-auto p-0 text-[11px]">
            Terms
          </Button>{' '}
          and{' '}
          <Button variant="link" className="h-auto p-0 text-[11px]">
            Privacy Policy
          </Button>
          .
        </p>
      </div>

      <Toaster richColors position="bottom-center" />
    </div>
  )
}
