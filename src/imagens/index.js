// export { LogoBicolor } from "./logo-bicolor/index";
import React from 'react';
import { CustomSVG } from './custom-svg/index';
import LogosBase from './logos-base';

const Logo = ({largura}) => <CustomSVG {...LogosBase('Logo')} largura={largura} />;
const LogoBicolor = ({largura}) => <CustomSVG {...LogosBase('LogoBicolor')} largura={largura} />;
const LogoMonoBranco = ({largura}) => <CustomSVG {...LogosBase('LogoMonoBranco')} largura={largura} />;
const LogoMonoPreto = ({largura}) => <CustomSVG {...LogosBase('LogoMonoPreto')} largura={largura} />;
const LogoMonoAzul = ({largura}) => <CustomSVG {...LogosBase('LogoMonoAzul')} largura={largura} />;
const LogoTST = ({largura}) => <CustomSVG {...LogosBase('LogoTST')} largura={largura} />;
const LogoTSTMonoBicolor = ({largura}) => <CustomSVG {...LogosBase('LogoTSTMonoBicolor')} largura={largura} />;

export { Logo, LogoBicolor, LogoMonoBranco, LogoMonoPreto, LogoMonoAzul, LogoTST, LogoTSTMonoBicolor };
