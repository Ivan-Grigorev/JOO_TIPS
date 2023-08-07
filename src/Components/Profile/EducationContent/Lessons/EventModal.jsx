import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Divider,
} from "@chakra-ui/react";

import "./eventModal.scss";

const EventModal = ({ event, isOpen, onClose }) => {
  console.log(event);

  const { lessonDuration, topic, subtopic, lessonNumber, flashcardsCount } =
    event;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <h1 className="calendar-modal__topic">{topic}</h1>
          <Divider />
          <span className="calendar-modal__subtopic">{subtopic}</span>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>
            <span className="bold">Duration:</span> {lessonDuration} minutes
          </p>
          <p>
            <span className="bold">Cards amount:</span> {flashcardsCount} cards
          </p>
          <Divider />
          <button type="button" className="calendar-modal__start-lesson">
            Start Lesson
          </button>
          {/* Добавьте другие поля для отображения дополнительной информации о событии */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;
