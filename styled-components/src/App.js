import Button from "./components/Button";
import { useState } from "react";
import Alert from "./components/Alert";
import OpenButton from "./components/OpenAlert";

function App() {
  const [isOpenAlert, setOpenAlert] = useState(false);

  const handleOpen = () => {
    setOpenAlert(true);
  };
  const handleClose = () => {
    setOpenAlert(false);
  };
  return (
    <div>
      <Button color="primary">Button</Button>
      <Button color="primary" disabled>
        Button
      </Button>
      <Button color="primary" size="large">
        Button
      </Button>
      <Button color="secondary" size="small">
        Button
      </Button>
      <Button color="secondary" disabled>
        Button
      </Button>
      <>
        <OpenButton onClick={handleOpen}>Open alert</OpenButton>

        {isOpenAlert && (
          <Alert color="primary" onClose={handleClose}>
            Join Tripma today and save up to 20% on your flight using code
            TRAVEL at checkout. Promotion valid for new users only.
          </Alert>
        )}
      </>
    </div>
  );
}

export default App;
