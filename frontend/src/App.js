import React from "react";
import { Button } from "flowbite-react";
function App() {
  const url =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_BACKEND_URL_DEVELOPMENT
      : process.env.REACT_APP_BACKEND_URL_PRODUCTION;
  console.log(url)
  return (
    <div>
      <Button>LocalUp</Button>
    </div>
  );
}

export default App;
