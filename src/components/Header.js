import logo from '../assets/logo.png';
import { useEffect, useState } from 'react';
export const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(() => {
         document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme)
    }, [theme])
    return (<header>
        <div className='logo'>
            <img src={logo} alt="logo" />
            <span>TaskMate</span>
        </div>
        <div className='themeSelector'>
            <span className={`${theme === 'light' ? 'activeTheme light' : 'light'}`} onClick={() => setTheme('light')}></span>
            <span className={`${theme === 'medium' ? 'activeTheme medium' : 'medium'}`} onClick={() => setTheme('medium')}></span>
            <span className={`${theme === 'dark' ? 'activeTheme dark' : 'dark'}`} onClick={() => setTheme('dark')}></span>
            <span className={`${theme === 'gOne' ? 'activeTheme gOne' : 'gOne'}`} onClick={() => setTheme('gOne')}></span>
            <span className={`${theme === 'gTwo' ? 'activeTheme gTwo' : 'gTwo'}`} onClick={() => setTheme('gTwo')}></span>
            <span className={`${theme === 'gThree' ? 'activeTheme gThree' : 'gThree'}`} onClick={() => setTheme('gThree')}></span>
        </div>
    </header>)
}