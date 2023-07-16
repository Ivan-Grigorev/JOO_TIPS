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
import {
  FacebookShareButton,
  TelegramShareButton,
  ViberShareButton,
  TelegramIcon,
  FacebookIcon,
  ViberIcon,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { useSelector } from "react-redux";
import { selectUserName } from "../../../../../redux/auth/auth-selectors";

const InviteFriendsItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook for managing the modal
  const username = useSelector(selectUserName);

  const shareUrl = `http://localhost:3001/signup?ref=${username}`; // your invite link

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
                <ul className="invite-links">
                  <li>
                    <TelegramShareButton url={shareUrl}>
                      {/* <TelegramIcon /> */}
                      Надіслати запрошення через Telegram
                    </TelegramShareButton>
                  </li>
                  <li>
                    <ViberShareButton url={shareUrl}>
                      {/* <ViberIcon /> */}
                      Надіслати запрошення через Viber
                    </ViberShareButton>
                  </li>
                  <li>
                    <FacebookShareButton url={shareUrl}>
                      {/* <FacebookIcon /> */}
                      Надіслати запрошення через Facebook
                    </FacebookShareButton>
                  </li>
                  <li>
                    <LinkedinShareButton url={shareUrl}>
                      Надіслати запрошення через LinkedIn
                    </LinkedinShareButton>
                  </li>
                  <li>
                    <TwitterShareButton url={shareUrl}>
                      Надіслати запрошення через Twitter
                    </TwitterShareButton>
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
