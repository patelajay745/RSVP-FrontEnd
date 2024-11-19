import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return;
  }
  return (
    <div
      id="error-page"
      className="flex min-h-screen items-center  justify-center flex-col "
    >
      <h1>404 | Not Found</h1>

      <i>{error.statusText || error.message}</i>
    </div>
  );
};
