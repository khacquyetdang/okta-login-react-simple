import { render } from "@testing-library/react";
import { LoginCallback } from '@okta/okta-react';

const CallBackLogin = function (props) {
    console.log("CallBackLogin", props);
    console.log(window.location);
    render(<LoginCallback />)
  };

export default CallBackLogin;