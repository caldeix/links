interface FooterProps {
  usingFallback: boolean
}

export function Footer({ usingFallback }: FooterProps) {
  return (
    <div className="text-center mt-12 pt-8 border-t border-gray-800">
      <p className="text-xs text-gray-500">
        {usingFallback ? "Datos de ejemplo" : "Cargado desde JSON"} • {new Date().toLocaleDateString("es-ES")}
      </p>
    </div>
  )
}
