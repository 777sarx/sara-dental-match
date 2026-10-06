import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-heading font-bold">404</h1>
      <p className="text-muted-foreground">Página no encontrada</p>
      <Link to="/" className="text-primary hover:underline">Volver al inicio</Link>
    </div>
  )
}
