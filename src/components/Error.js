import { defaultHead } from "next/head";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const Err = useRouteError();
  return (
    <div>
      <h2>opps!</h2>
      <h3>something wrong ? checkit code onece</h3>
      {console.log(Err)}
      <h1>{Err.status}-{Err.statusText}</h1>
    </div>
  );
};
export default Error;
