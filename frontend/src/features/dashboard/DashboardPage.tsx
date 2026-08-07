import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/features/auth/store/authStore"

export function DashboardPage() {
  const navigate = useNavigate()
  const { userEmail, logout } = useAuthStore()

  function handleLogout() {
    logout()
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-ink text-2xl font-semibold mb-2">
          Welcome, {userEmail}
        </h1>
        <p className="text-muted mb-6">
          The real dashboard is coming in Sprint 4. For now, this confirms
          you're logged in.
        </p>
        <Button onClick={handleLogout} variant="outline" className="rounded-full">
          Log out
        </Button>
      </div>
    </div>
  )
}