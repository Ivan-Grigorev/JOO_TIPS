import {
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
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
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
} from "../../../../redux/auth/auth-selectors";
import "./styles.scss";
import { useEffect, useState } from "react";
import { deleteUser } from "../../../../redux/auth/auth-operations";

const MenuDeleteAccountItem = () => {
  // useDispatch hook lets us dispatch actions to modify Redux store.
  const dispatch = useDispatch();
  // useSelector lets us extract a specific value from Redux store.
  const userName = useSelector(selectUserName);

  // useDisclosure is a custom hook from Chakra UI to handle common disclosure components
  const { isOpen, onOpen, onClose } = useDisclosure();
  // useState is a hook that lets us add React state to function components
  const [show, setShow] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [inputClass, setInputClass] = useState("visually-hidden");

  const email = useSelector(selectUserEmail);

  // useEffect lets us perform side effects in function components.
  // Here it sets the initial state for 'inputClass'.
  useEffect(() => setInputClass("visually-hidden"), []);

  // This function toggles the visibility of the input field by updating 'inputClass' state.
  const handleCheckboxChange = (e) => {
    const input = document.querySelector(".chakra-input");
    setIsCheckboxChecked(e.target.checked);
    if (e.target.checked) {
      setInputClass("");
      input.disabled = false;
    } else {
      setInputClass("visually-hidden");
      input.disabled = true;
      input.style.cursor = "default";
    }
  };

  // This function dispatches an action to delete the user account.
  const handleDeleteAccount = () => {
    dispatch(deleteUser({ email, password }));
  };

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

                <Checkbox value="accept" onChange={handleCheckboxChange}>
                  Я прочитав(ла) та розумію наслідки видалення мого облікового
                  запису.
                </Checkbox>

                <InputGroup size="md" className={inputClass}>
                  <Input
                    name="confirmedPassword"
                    className="confirm-password-input"
                    type={show ? "text" : "password"}
                    placeholder="Confirm your password"
                    onChange={(e) => setPassword(e.target.value)}
                    pr="4.5rem"
                    style={{ cursor: isCheckboxChecked ? "auto" : "default" }}
                    disabled
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShow(!show)}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Скасувати
              </Button>
              <Button
                colorScheme="red"
                onClick={handleDeleteAccount}
                isDisabled={!isCheckboxChecked || password === ""}
              >
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
