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
import { useState } from "react";
import CookieDeclaration from "./CookieDeclaration/CookieDeclaration";
import CookieAbout from "./CookieAbout/CookieAbout";

const ModalCookieDetails = ({ handleAcceptAll, handleDeclineAll }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook for managing the modal
  const [view, setView] = useState("CookieDeclaration"); // Состояние для отслеживания текущего представления

  const switchContent = () => {
    if (view === "CookieDeclaration") {
      setView("AboutCookies");
    } else {
      setView("CookieDeclaration");
    }
  };

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

            <ModalCloseButton onClick={() => setView("content1")} />

            <ModalBody
              className="cookie__details-body"
              style={{ padding: "8px 0" }}
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
                    className="cookie__details-buttons"
                  >
                    Cookie declaration
                  </Button>
                  <Button
                    colorScheme="gray"
                    variant={"ghost"}
                    size={"xs"}
                    onClick={switchContent}
                    className="cookie__details-buttons"
                  >
                    About cookies
                  </Button>
                </ButtonGroup>

                <div className="content">
                  {view === "CookieDeclaration" && <CookieDeclaration />}
                  {view === "AboutCookies" && <CookieAbout />}
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
