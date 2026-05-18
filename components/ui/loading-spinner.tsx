export function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex items-center justify-center">
      <div className="text-center">
        <div
          className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
          style={{ borderColor: "var(--app-gold) transparent transparent transparent" }}
        />
        <p className="text-brand-muted">Cargando enlaces...</p>
      </div>
    </div>
  )
}
