import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const EventModal = ({ event, isOpen, onClose }) => {
  console.log(event);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{event.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>{`Start: ${event.start.toLocaleString()}`}</p>
          <p>{`End: ${event.end.toLocaleString()}`}</p>
          {/* Добавьте другие поля для отображения дополнительной информации о событии */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;
