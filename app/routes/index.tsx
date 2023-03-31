import type { V2_MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};
const Control = () => {
  return <div>Hello World!</div>;
};

export default function Index() {
  const [show, isShow] = useState<boolean>(false);
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <button onClick={() => isShow(!show)}>Toggle</button>
      {show && <Control />}
    </div>
  );
}
