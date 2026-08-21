import { useEffect, useState } from "react";

function ServerLoader({ children }) {
  const [serverReady, setServerReady] = useState(false);

  useEffect(() => {
    let interval;

    const checkServer = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/health`
        );

        if (!response.ok) {
          throw new Error("Server is not ready");
        }

        const data = await response.json();

        if (data.status === "working") {
          setServerReady(true);
          clearInterval(interval);
        }
      } catch (error) {
        console.log("Waiting for backend...");
      }
    };

    checkServer();

    interval = setInterval(checkServer, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!serverReady) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-background">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />

        <h2 className="mt-6 text-xl font-semibold">
          Starting server...
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Please wait while we connect to the server.
        </p>
      </div>
    );
  }

  return children;
}

export default ServerLoader;