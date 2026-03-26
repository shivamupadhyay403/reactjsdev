import { useState } from 'react'

/* ─── Inline shadcn-style primitives (self-contained, no build step needed) ─── */

const cn = (...classes) => classes.filter(Boolean).join(' ')

function Button({
  children,
  className,
  variant = 'default',
  size = 'default',
  disabled,
  type = 'button',
  onClick,
}) {
  const base =
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer'
  const variants = {
    default:
      'bg-[#c8a97e] text-[#0b0b0f] hover:bg-[#b8996e] shadow-md hover:shadow-[0_8px_32px_rgba(200,169,126,0.35)] hover:-translate-y-px active:translate-y-0',
    outline:
      'border border-white/10 bg-white/4 text-[#f0ede8] hover:bg-white/8 hover:border-white/20 hover:-translate-y-px',
    ghost: 'text-[#c8a97e] hover:bg-white/6 hover:text-[#c8a97e]',
    link: 'text-[#c8a97e] underline-offset-4 hover:underline p-0 h-auto',
  }
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-8 px-3 text-xs',
    lg: 'h-11 px-8',
    icon: 'h-9 w-9',
  }
  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function Input({ className, type = 'text', ...props }) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-white/10 bg-white/4 px-3 py-2 text-sm text-[#f0ede8] placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#c8a97e]/40 focus:border-white/30 transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}

function Label({ children, htmlFor, className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'text-[10px] uppercase tracking-widest text-white/40 font-mono mb-1.5 block',
        className
      )}
    >
      {children}
    </label>
  )
}

function Separator({ className }) {
  return <div className={cn('h-px w-full bg-white/8', className)} />
}

function Checkbox({ id, checked, onCheckedChange }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      id={id}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        'h-4 w-4 shrink-0 rounded-sm border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a97e]/50',
        checked
          ? 'bg-[#c8a97e] border-[#c8a97e]'
          : 'border-white/20 bg-white/4 hover:border-white/30'
      )}
    >
      {checked && (
        <svg
          viewBox="0 0 10 10"
          className="w-3 h-3 mx-auto"
          fill="none"
          stroke="#0b0b0f"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1.5,5 4,7.5 8.5,2.5" />
        </svg>
      )}
    </button>
  )
}

/* ─── Toaster ─── */
function Toast({ message, type, visible }) {
  return (
    <div
      className={cn(
        'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl border text-[12px] font-mono tracking-wide shadow-2xl transition-all duration-300',
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none',
        type === 'success'
          ? 'bg-[#111117] border-emerald-500/30 text-emerald-400'
          : 'bg-[#111117] border-red-500/30 text-red-400'
      )}
    >
      {message}
    </div>
  )
}

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
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    type: 'success',
  })

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type })
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 3200)
  }

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
    showToast('✓ Signed in successfully', 'success')
  }

  return (
    <>
      {/* ── Google Font injection ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');
        body { margin:0; background:#0b0b0f; }
        .mira-bg::before {
          content:''; position:fixed; inset:0; z-index:0; pointer-events:none;
          background: radial-gradient(ellipse 65% 55% at 72% 18%, rgba(200,169,126,.08) 0%, transparent 60%),
                      radial-gradient(ellipse 45% 65% at 18% 82%, rgba(120,100,200,.05) 0%, transparent 60%);
        }
        .mira-grain::after {
          content:''; position:fixed; inset:0; z-index:0; pointer-events:none; opacity:.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px) scale(.985); }
          to   { opacity:1; transform:translateY(0)     scale(1); }
        }
        .animate-fadeUp { animation: fadeUp .55s cubic-bezier(.22,1,.36,1) both; }
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-mono-custom { font-family: 'DM Mono', monospace; }
        .shimmer { position:relative; overflow:hidden; }
        .shimmer::after {
          content:''; position:absolute; top:0; left:-100%; width:55%; height:100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left .45s ease;
        }
        .shimmer:hover::after { left:160%; }
      `}</style>

      {/* ── Wrapper ── */}
      <div className="mira-bg mira-grain relative min-h-screen flex items-center justify-center p-4 font-mono-custom bg-[#0b0b0f]">
        {/* ── Card ── */}
        <div className="animate-fadeUp relative z-10 w-full max-w-[420px] bg-[#111117] border border-white/8 rounded-[18px] p-11 shadow-[0_32px_64px_rgba(0,0,0,0.55),0_0_80px_rgba(200,169,126,0.04)]">
          {/* Brand */}
          <div className="flex items-center gap-2.5 mb-9">
            <span className="font-display text-[22px] tracking-widest text-[#f0ede8]">
              Login
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-[32px] font-light text-[#f0ede8] leading-tight mb-1.5">
            Welcome <em className="italic text-[#c8a97e]">back</em>
          </h1>
          <p className="text-[11.5px] text-white/35 tracking-wider mb-8">
            Sign in to continue to your workspace
          </p>

          <Separator className="mb-8" />

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email address</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
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
                    errors.email && 'border-red-400/60 focus:ring-red-400/20'
                  )}
                />
              </div>
              {errors.email && (
                <p className="text-[10.5px] text-red-400 tracking-wide mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
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
                    errors.password && 'border-red-400/60 focus:ring-red-400/20'
                  )}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-white/30 hover:text-white/70"
                  onClick={() => setShowPw((v) => !v)}
                >
                  {showPw ? <IconEyeOff /> : <IconEye />}
                </Button>
              </div>
              {errors.password && (
                <p className="text-[10.5px] text-red-400 tracking-wide mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between pt-1">
              <label
                htmlFor="remember"
                className="flex items-center gap-2.5 cursor-pointer select-none"
              >
                <Checkbox
                  id="remember"
                  checked={remember}
                  onCheckedChange={setRemember}
                />
                <span className="text-[11.5px] text-white/35 tracking-wide">
                  Remember me
                </span>
              </label>
              <Button
                variant="link"
                className="text-[11.5px] tracking-wide p-0 h-auto"
              >
                Forgot password?
              </Button>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="default"
              className="shimmer w-full h-10 text-[11px] uppercase tracking-[0.12em] font-mono-custom font-normal"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <IconSpinner /> Signing in…
                </span>
              ) : (
                'Sign in'
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* Toast */}
      <Toast {...toast} />
    </>
  )
}
