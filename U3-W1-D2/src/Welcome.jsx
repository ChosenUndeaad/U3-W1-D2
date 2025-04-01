import Alert from "react-bootstrap/Alert";

function WelcomeAlert() {
  return (
    <>
      {["secondary"].map((variant) => (
        <Alert className='' key={variant} variant={variant}>
          Lo shop per libri online più rifornito del web!
        </Alert>
      ))}
    </>
  );
}

export default WelcomeAlert;
