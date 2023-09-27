import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { ThreeDot } from "../../../../icon/icons";

function DropdownBtn({ handleEditClick, onDelete }) {
  return (
    <>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle
          style={{ backgroundColor: "white" }}
          id="dropdown-custom-1"
        >
          <ThreeDot />
        </Dropdown.Toggle>
        <Dropdown.Menu className="super-colors">
          <Dropdown.Item onClick={handleEditClick} eventKey="1">
            수정
          </Dropdown.Item>
          <Dropdown.Item onClick={onDelete} eventKey="2">
            삭제
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default DropdownBtn;
