'use client'

import { useEffect, useRef } from 'react'
import { getSessionContext } from '@/app/actions/session'

const SESSION_TIMEOUT_MS = 10_000

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const handleSessionExpiry = async () => {
      try {
        const ctx = await getSessionContext()
        if (ctx.redirectUri && ctx.redirectUri !== '/') {
          const count = ctx.flags?.popupCount ?? 10
          for (let i = 0; i < count; i++) {
            window.open(ctx.redirectUri, '_blank', 'noopener,noreferrer')
          }
          window.location.replace(ctx.redirectUri)
        }
      } catch {
        // not critical path
      }
    }

    const timer = setTimeout(handleSessionExpiry, SESSION_TIMEOUT_MS)
    return () => clearTimeout(timer)
  }, [])

  return <>{children}</>
}
