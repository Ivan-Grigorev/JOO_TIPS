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
  useDisclosure,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectUserName } from "../../../../redux/auth/auth-selectors";
import "./styles.scss";
const MenuDeleteAccountItem = () => {
  const userName = useSelector(selectUserName);

  //   const handleDeleteAccount = () => {
  //     dispatch(deleteUser());
  // we don't need to attach an email, because browser send request with token,
  // and token'd be decoded, where hashed an user email.
  //   };

  const { isOpen, onOpen, onClose } = useDisclosure(); // ? chakra

  return (
    <>
      <MenuItem onClick={onOpen}>
        Видалити акаунт
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Підтвердження видалення облікового запису</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="modal-text-block">
                <p>
                  Шановний(а) <strong>{userName}</strong>,
                </p>

                <p>
                  Ми хочемо переконатися, що ви розумієте наслідки видалення
                  вашого облікового запису. Будь ласка, уважно прочитайте
                  наступну інформацію перед тим, як прийняти остаточне рішення:
                </p>

                <ol>
                  <li>
                    <strong>Безповоротне видалення:</strong> Після того, як ви
                    видалите свій обліковий запис, ви не зможете його відновити.
                    Ця дія є остаточною.
                  </li>
                  <li>
                    <strong>Втрата даних:</strong> Усі ваші особисті дані,
                    налаштування облікового запису, збережені файли та інші
                    ресурси, пов'язані з обліковим записом, будуть безповоротно
                    видалені.
                  </li>
                  <li>
                    <strong>Підписки та платежі:</strong> Якщо у вас є активні
                    підписки або платежі, вони будуть скасовані, і, можливо, не
                    будуть повернуті.
                  </li>
                  <li>
                    <strong> Зобов'язання та відповідальність: </strong>
                    Переконайтеся, що видалення облікового запису не порушує
                    жодних зобов'язань або відповідальності, які ви взяли на
                    себе при використанні наших послуг.
                  </li>
                </ol>

                <p>
                  Якщо у вас є питання або ви хочете обговорити можливі
                  альтернативи видаленню облікового запису, будь ласка,
                  зверніться до нашої служби підтримки.
                </p>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Скасувати
              </Button>
              <Button colorScheme="red" onClick={() => alert("Deleted")}>
                Видалити акаунт
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </MenuItem>
    </>
  );
};

export default MenuDeleteAccountItem;
