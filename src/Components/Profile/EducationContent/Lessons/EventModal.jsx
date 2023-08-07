import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

import "./eventModal.scss";

const EventModal = ({ event, isOpen, onClose }) => {
  console.log(event);

  const { startTime, endTime, topic, subtopic, lessonNumber, flashcardsCount } =
    event;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <h1 className="calendar-modal__topic">{topic}</h1>
          <span className="calendar-modal__subtopic">{subtopic}</span>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>{`Start: ${startTime.toLocaleString()}`}</p>
          <p>{`End: ${endTime.toLocaleString()}`}</p>
          {/* Добавьте другие поля для отображения дополнительной информации о событии */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;
