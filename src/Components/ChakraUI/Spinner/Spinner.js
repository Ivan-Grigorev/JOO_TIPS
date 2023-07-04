import "./Spinner.css";
const { Spinner } = require("@chakra-ui/react");

const ChakraSpinner = () => {
  return (
    <Spinner
      color="#4ca2e5"
      size={"xl"}
      emptyColor="gray.200"
      speed="900ms"
    />
  );
};

export default ChakraSpinner;
