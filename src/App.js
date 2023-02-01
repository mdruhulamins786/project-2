import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

// bg-[#0c6e1c]
