import { FormControl, FormLabel, SimpleGrid, Switch } from "@chakra-ui/react";
import "./CookieDeclaration.scss";

const CookieDeclaration = ({ selectedCookies, handleSwitchChange }) => {
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
          <Switch
            onChange={handleSwitchChange}
            id="neccessary"
            isChecked
            isDisabled
          />
        </div>

        <div className="cookie-list__item">
          <FormLabel htmlFor="performance">
            <span className="cookie-name">
              Performance:
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
          <Switch
            onChange={handleSwitchChange}
            id="performance"
            isChecked={selectedCookies.performance}
          />
        </div>

        <div className="cookie-list__item">
          <FormLabel htmlFor="targeting">
            <span className="cookie-name">
              Targeting:
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
          <Switch
            onChange={handleSwitchChange}
            id="targeting"
            isChecked={selectedCookies.targeting}
          />
        </div>

        <div className="cookie-list__item">
          <FormLabel htmlFor="functionality">
            <span className="cookie-name">
              Functionality:
              <br />
            </span>
            <p className="cookie-description">
              Functionality cookies enhance the user experience by remembering
              choices you make on the website, such as language preferences,
              font sizes, or region selection. They make the site more
              personalized and user-friendly, providing a seamless experience.
            </p>
          </FormLabel>
          <Switch
            onChange={handleSwitchChange}
            id="functionality"
            isChecked={selectedCookies.functionality}
          />
        </div>

        <div className="cookie-list__item">
          <FormLabel htmlFor="unclassified">
            <span className="cookie-name">
              Unclassified Cookies:
              <br />
            </span>
            <p className="cookie-description">
              Unclassified cookies are those that are being categorized, and
              their purpose is not yet defined. It might happen when new cookies
              are introduced, or the website is still under development. Website
              owners may update the cookie policy once these cookies are
              properly identified and classified.
            </p>
          </FormLabel>
          <Switch
            onChange={handleSwitchChange}
            id="unclassified"
            isChecked={selectedCookies.unclassified}
          />
        </div>
      </FormControl>
    </>
  );
};

export default CookieDeclaration;
