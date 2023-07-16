// Importing necessary libraries and hooks
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

// Importing Redux actions and selectors
import { deleteUser } from "../../../../../redux/auth/auth-operations";
import { resetDeleteErrors } from "../../../../../redux/auth/auth-slice";
import {
  selectUserEmail,
  selectUserErrors,
  selectUserName,
} from "../../../../../redux/auth/auth-selectors";

import "./styles.scss";

// MenuDeleteAccountItem component
const MenuDeleteAccountItem = () => {
  const dispatch = useDispatch(); // To dispatch actions
  const userName = useSelector(selectUserName); // Getting username from the Redux store
  const email = useSelector(selectUserEmail); // Getting email from the Redux store
  const errors = useSelector(selectUserErrors); // Getting user errors from the Redux store

  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook for managing the modal

  // useState hooks to handle internal component state
  const [show, setShow] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [inputClass, setInputClass] = useState("visually-hidden");

  // Effect to handle user errors
  useEffect(() => {
    const input = document.querySelector(".confirm-password-input");
    const messages = document.querySelector(".modal-text-block .message");
    const show = () => (messages.style.opacity = 1);
    const hide = () => (messages.style.opacity = 0);

    // it's get it more smoothly
    if (input) {
      if (errors.delete.length > 0) {
        input.style.border = "2px solid red";
        show();
      } else {
        hide();
      }
    }
  });

  // Handles the Checkbox onChange event
  const handleCheckboxChange = (e) => {
    const input = document.querySelector(".chakra-input");
    setIsCheckboxChecked(e.target.checked); // Toggling the checkbox value
    setInputClass(e.target.checked ? "" : "visually-hidden"); // Toggling input visibility
    input.disabled = !e.target.checked; // Disabling input when checkbox is unchecked
  };

  // Handles account deletion
  const handleDeleteAccount = () => {
    dispatch(deleteUser({ email, password })); // Dispatches the deleteUser action
  };

  return (
    <>
      <MenuItem
        onClick={() => {
          onOpen();
          setInputClass("visually-hidden"); // Here it sets the initial state for 'inputClass'.
        }}
      >
        Видалити акаунт
        <Modal
          isOpen={isOpen}
          onClose={() => {
            onClose();
            dispatch(resetDeleteErrors());
          }}
          size={"xl"}
        >
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
                    errorBorderColor="red.300"
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

                <div className="message">
                  {errors.delete.map((error) => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
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
