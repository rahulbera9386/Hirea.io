import React from "react";
import { Button } from "@/components/ui/button"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"

const router = createBrowserRouter([{
  path:"/",
  element:(<div> <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <Button className="mt-6">Click me</Button>
    </div>)
}])

const App = () => {
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
};

export default App;
