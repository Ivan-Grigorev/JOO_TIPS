import {
  Checkbox,
  FormControl,
  FormLabel,
  SimpleGrid,
  Switch,
} from "@chakra-ui/react";
import "./CookieDeclaration.scss";

const CookieDeclaration = ({ selectedCookies, setCookieValue }) => {
  return (
    <>
      <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
        <FormLabel htmlFor="isChecked">
          <span className="cookie-name">
            Strictly Necessary <br />
          </span>
          <p className="cookie-description">
            Strictly necessary cookies are essential for the proper functioning
            of a website. They enable basic functionalities like page
            navigation, access to secure areas, and form submissions. These
            cookies do not require user consent, as the website cannot function
            correctly without them.
          </p>
        </FormLabel>
        <Switch id="isChecked" isChecked isDisabled />
      </FormControl>
    </>
  );
};

export default CookieDeclaration;
