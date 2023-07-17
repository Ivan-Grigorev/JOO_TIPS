// Importing necessary libraries and hooks
import {
  Button,
  MenuItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import "./styles.scss";
import { useSelector } from "react-redux";
import { selectUserName } from "../../../../../redux/auth/auth-selectors";

const InviteFriendsItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook for managing the modal
  const username = useSelector(selectUserName);

  // Here, we are encoding the URL to make sure it can be safely included in a query string.
  const siteAddress = "http://localhost:3001"; //! on prod status change it to real site address
  const shareUrl = encodeURIComponent(`${siteAddress}/signup?ref=${username}`); // prettier-ignore
  const text = encodeURIComponent('Join me on JooTips app! Here is your invite link:'); // prettier-ignore

  // URLs for different platforms
  const telegramUrl = `https://telegram.me/share/url?url=${shareUrl}&text=${text}`;
  const whatsappUrl = `https://wa.me/?text=${text + shareUrl}`;

  return (
    <>
      <MenuItem onClick={onOpen}>
        Запросити друзiв
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Запросіть друзів та отримайте бонуси!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="modal-invite">
                <Text>
                  Поділіться радістю від використання нашого сервісу з друзями
                  та близькими! Надішліть їм реферальне запрошення через свій
                  улюблений месенджер та
                  <strong> отримайте спеціальні бонуси</strong>, коли вони
                  зареєструються та скористаються нашими послугами.
                </Text>
                <Text>
                  Оберіть один з доступних варіантів нижче, щоб почати:
                </Text>

                {/* These are links that will open in a new tab. When clicked, they will open the respective app with a prefilled text. */}
                {/* Here's need to be <a> tags, not Link */}
                <ul className="invite-links">
                  <li>
                    <a
                      href={telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>Share on Telegram</strong>
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>Share on WhatsApp</strong>
                    </a>
                  </li>
                </ul>

                <Text>
                  Кожне запрошення містить унікальне реферальне посилання, яке
                  дозволяє нам відслідковувати ваші запрошення.{" "}
                  <strong>
                    Дякуємо, що допомагаєте нашій спільноті рости!
                  </strong>
                </Text>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Скасувати
              </Button>
              <Button colorScheme="red">Запросити</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </MenuItem>
    </>
  );
};

export default InviteFriendsItem;
