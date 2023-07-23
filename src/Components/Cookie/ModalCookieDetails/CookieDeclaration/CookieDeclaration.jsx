import { FormControl, FormLabel, SimpleGrid, Switch } from "@chakra-ui/react";
import "./CookieDeclaration.scss";

const CookieDeclaration = ({ selectedCookies, setCookieValue }) => {
  return (
    <>
      <FormControl
        as={SimpleGrid}
        columns={{ base: 2, lg: 4 }}
        className="cookie-list"
      >
        <div className="cookie-list__item">
          <FormLabel htmlFor="neccessary">
            <span className="cookie-name">
              Strictly Necessary <br />
            </span>
            <p className="cookie-description">
              Strictly necessary cookies are essential for the proper
              functioning of a website. They enable basic functionalities like
              page navigation, access to secure areas, and form submissions.
              These cookies do not require user consent, as the website cannot
              function correctly without them.
            </p>
          </FormLabel>
          <Switch id="neccessary" isChecked isDisabled />
        </div>

        <div className="cookie-list__item">
          <FormLabel htmlFor="perfomance">
            <span className="cookie-name">
              Performance Cookies:
              <br />
            </span>
            <p className="cookie-description">
              Performance cookies gather anonymous information about how
              visitors use a website. They help website owners understand which
              pages are the most popular, how users navigate the site, and if
              there are any errors. These cookies assist in improving the
              website's performance and user experience.
            </p>
          </FormLabel>
          <Switch id="perfomance" />
        </div>

        <div className="cookie-list__item">
          <FormLabel htmlFor="targeting">
            <span className="cookie-name">
              Targeting Cookies:
              <br />
            </span>
            <p className="cookie-description">
              Targeting cookies are used to track visitors across websites.
              Their primary purpose is to display advertisements that are
              relevant and engaging to individual users. These cookies collect
              data about users' browsing habits and interests, enabling
              advertisers to deliver personalized content.
            </p>
          </FormLabel>
          <Switch id="targeting" />
        </div>
      </FormControl>
    </>
  );
};

export default CookieDeclaration;
