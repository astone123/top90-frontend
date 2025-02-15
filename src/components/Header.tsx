import {useEffect, useState} from 'react';

import _logoWhite from '../assets/top90logo-white.png';
import _logoBlack from '../assets/top90logo-black.png';

const logoStyle = {
  height: 250,
  cursor: 'pointer',
};

interface HeaderProps {
  selectedTheme: string;
  onClick?: () => void;
}

export function Header({selectedTheme, onClick}: HeaderProps) {
  const [logo, setLogo] = useState(_logoBlack);

  function getLogo(theme: string) {
    if (theme === 'dark') {
      return _logoWhite;
    }
    return _logoBlack;
  }

  useEffect(() => {
    setLogo(getLogo(selectedTheme));
  }, [selectedTheme]);

  return (
    <div className="d-flex justify-content-center">
      <img style={logoStyle} src={logo} onClick={onClick} alt="logo" />
    </div>
  );
}
