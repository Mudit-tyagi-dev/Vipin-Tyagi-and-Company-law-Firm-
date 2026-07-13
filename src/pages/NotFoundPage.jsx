import { Link } from 'react-router-dom';
export default function NotFoundPage() {
  return <div className="min-h-screen flex items-center justify-center flex-col gap-4 text-center px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-xl text-muted-foreground">Page not found</p>
      <Link to="/" className="mt-4 underline text-primary hover:opacity-80">
        Back to Home
      </Link>
    </div>;
}
