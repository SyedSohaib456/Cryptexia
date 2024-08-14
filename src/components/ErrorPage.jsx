import { Container, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

const ErrorMessage = ({ message }) => {
  return (
    <Container
     p={2}
    >
      <Alert status="error" width="full">
        <AlertIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </Container>
  );
};

export default ErrorMessage;
