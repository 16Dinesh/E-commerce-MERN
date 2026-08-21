import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, ShieldX } from "lucide-react";

function UnauthPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-lg text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
          <ShieldX className="h-10 w-10 text-destructive" />
        </div>

        {/* Error Code */}
        <h1 className="text-7xl font-black tracking-tight text-destructive">
          403
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Access Denied
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          You don't have permission to view this page. Please make sure
          you're logged in with an account that has the required access.
        </p>

        {/* Actions */}
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

        {/* Footer */}
        <p className="mt-10 text-sm text-muted-foreground">
           Quick E-commerce • Your Shopping journey starts here 
        </p>
      </div>
    </div>
  );
}

export default UnauthPage;