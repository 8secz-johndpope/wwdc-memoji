import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container>
        <h1>
          WWDC Emoji Creator
        </h1>
        <ul>
          <li>
            <a href="https://github.com/colbyfayock/wwdc-memoji">
              <FaGithub /> View on Github
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;