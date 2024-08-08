import React from "react";
import { Dropdown } from "react-bootstrap";
import { getCurrentLang, langs, setCurrentLang } from "../../helpers/locale-helper";


const LangSwitcher = () => {

    const currentLang = getCurrentLang();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
      <span className={`fi fi-${currentLang.country} me-2`}></span> {currentLang.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {langs.map((item) => (
          <Dropdown.Item href="#/action-1" key={item.code} onClick={()=> setCurrentLang(item)}>
            <span className={`fi fi-${item.country} me-2`}></span> 
             {item.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LangSwitcher;
