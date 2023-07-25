import { IoIosSettings } from "react-icons/io";
import "./ModalCookieDetails.scss";
import {
  useDisclosure,
  Button,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Link,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import CookieDeclaration from "./CookieDeclaration/CookieDeclaration";
import CookieAbout from "./CookieAbout/CookieAbout";

const ModalCookieDetails = ({
  handleAcceptAll,
  handleDeclineAll,
  selectedCookies,
  setCookieValue,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook for managing the modal
  const [view, setView] = useState("CookieDeclaration"); // Состояние для отслеживания текущего представления

  // Function: switchContent
  // Description: This function toggles between different views when a specific event (e) occurs.
  // It updates the 'view' state based on the target view selected (either "CookieDeclaration" or "AboutCookies")
  // and adds/removes the 'switch-content__active' class based on the button clicked.
  // Parameter: e (Event) - The event object containing information about the event triggered.
  const switchContent = (e) => {
    // Determine the target view based on the 'name' property of the event target.
    const targetView =
      e.target.name === "declaration" ? "CookieDeclaration" : "AboutCookies";

    // Check if the current 'view' is different from the target view to avoid unnecessary state updates.
    if (view !== targetView) {
      setView(targetView); // Update the 'view' state with the selected target view.

      // Remove the 'switch-content__active' class from all buttons in the group.
      const buttons = document.querySelectorAll(".cookie__details-buttons");
      buttons.forEach((button) =>
        button.classList.remove("switch-content__active")
      );

      // Add the 'switch-content__active' class to the clicked button.
      e.target.classList.add("switch-content__active");
    }
  };

  // set default value when first rendered
  useEffect(() => setView("CookieDeclaration"), []);

  return (
    <>
      <Button
        size="xs"
        colorScheme="transparent"
        variant={"ghost"}
        className="cookie__buttons cookie__details-button"
        onClick={onOpen}
      >
        <IoIosSettings />
        Show details
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader style={{ paddingBottom: "0" }}>
              <p className="title">This website uses cookies</p>
            </ModalHeader>
            <Divider />

            <ModalCloseButton onClick={() => setView("CookieDeclaration")} />

            <ModalBody
              className="cookie__details-body"
              style={{ padding: "15px 0 0 0" }}
            >
              <p className="cookie__description">
                We use cookies to improve user experience. Choose what cookies
                you allow us to use. You can read more about our Cookie Policy
                in our{" "}
                <Link color="blue.500" href="#">
                  Privacy Policy
                </Link>
              </p>

              <div className="content-section">
                <ButtonGroup>
                  <Button
                    colorScheme="gray"
                    variant={"ghost"}
                    size={"xs"}
                    onClick={switchContent}
                    name="declaration"
                    className="cookie__details-buttons switch-content__active"
                  >
                    Cookie declaration
                  </Button>
                  <Button
                    colorScheme="gray"
                    variant={"ghost"}
                    size={"xs"}
                    onClick={switchContent}
                    name="about"
                    className="cookie__details-buttons"
                  >
                    About cookies
                  </Button>
                </ButtonGroup>

                {/* Render the content based on the view state */}
                <div className="content">
                  {view === "CookieDeclaration" ? (
                    <CookieDeclaration />
                  ) : (
                    <CookieAbout />
                  )}
                </div>
              </div>
            </ModalBody>

            <ModalFooter>
              <ButtonGroup className="cookie__details-buttons-group">
                <Button
                  size="xs"
                  colorScheme="green"
                  variant={"ghost"}
                  onClick={handleAcceptAll}
                  className="cookie__buttons"
                >
                  Accept all
                </Button>

                <Button
                  size="xs"
                  colorScheme="red"
                  variant={"ghost"}
                  onClick={handleDeclineAll}
                  className="cookie__buttons"
                >
                  Decline all
                </Button>

                <Button
                  size="xs"
                  style={{ backgroundColor: "#6BBE6B" }}
                  onClick={handleAcceptAll}
                  className="cookie__buttons cookie__save-button"
                >
                  Save & close
                </Button>
              </ButtonGroup>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Button>
    </>
  );
};

export default ModalCookieDetails;
