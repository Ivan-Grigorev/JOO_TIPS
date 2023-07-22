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
} from "@chakra-ui/react";

const ModalCookieDetails = ({ handleAcceptAll, handleDeclineAll }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook for managing the modal
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
            <ModalHeader>This website uses cookies</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Some content</ModalBody>

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
