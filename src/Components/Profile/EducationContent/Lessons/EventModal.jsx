import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Divider,
} from "@chakra-ui/react";

import PropTypes from "prop-types";

import "./eventModal.scss";
import { memo } from "react";
import { useCallback } from "react";

const EventModal = memo(({ event, isOpen, onClose, handleFinishLesson }) => {
  const {
    _id,
    lessonDuration,
    topic,
    subtopic,
    lessonNumber,
    flashcardsCount,
  } = event;

  const finishLesson = useCallback(() => {
    handleFinishLesson(_id);
  }, [handleFinishLesson, _id]);

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
          <button
            type="button"
            className="calendar-modal__start-lesson"
            onClick={finishLesson}
          >
            Start Lesson
          </button>
          {/* Добавьте другие поля для отображения дополнительной информации о событии */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

EventModal.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    topic: PropTypes.string.isRequired,
    subtopic: PropTypes.string.isRequired,
    flashcardsCount: PropTypes.number.isRequired,
    startTime: PropTypes.string,
    endTime: PropTypes.string.isRequired,
    lessonDate: PropTypes.string.isRequired,
    lessonNumber: PropTypes.number.isRequired,
    lessonDuration: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
  }),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  handleFinishLesson: PropTypes.func.isRequired,
};

export default EventModal;
