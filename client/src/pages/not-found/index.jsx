import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, SearchX } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-lg text-center">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <SearchX className="h-10 w-10 text-primary" />
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-black tracking-tight text-primary">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Page not found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It may have
          been moved, deleted, or the URL might be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>

          <Button asChild className="gap-2">
            <Link to="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Small footer message */}
        <p className="mt-10 text-sm text-muted-foreground">
          Quick E-commerce • Let's get you back on track 
        </p>
      </div>
    </div>
  );
}

export default NotFound;