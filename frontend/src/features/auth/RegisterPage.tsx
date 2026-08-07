import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sprout, Loader2 } from "lucide-react"
import { registerUser, loginUser } from "./api/authApi"
import { useAuthStore } from "./store/authStore"

export function RegisterPage() {
  const navigate = useNavigate()
  const setAuth = useAuthStore((s) => s.setAuth)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      await registerUser({ name, email, password })
      // auto-login right after successful registration
      const res = await loginUser({ email, password })
      setAuth(res.access_token, email)
      navigate("/dashboard")
    } catch (err: any) {
      setError(
        err?.response?.data?.detail || "Something went wrong. Please try again."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 justify-center mb-8">
          <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
            <Sprout className="h-5 w-5 text-white" />
          </div>
          <span className="text-ink font-semibold text-lg tracking-tight">
            KrishiMitra AI
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-8">
          <h1 className="text-ink text-xl font-semibold mb-1">Create your account</h1>
          <p className="text-muted text-sm mb-6">Start selling smarter today</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-ink block mb-1.5">
                Full name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-ink block mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-ink block mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                placeholder="At least 8 characters"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-dark text-white rounded-lg py-2.5"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Create account"
              )}
            </Button>
          </form>

          <p className="text-sm text-muted text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}