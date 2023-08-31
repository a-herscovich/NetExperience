import {useState, useEffect} from 'react';
import "./Home.scss";

const HomeBackgroundEffect = () => {
    const [activeColor, setActiveColor] = useState('violet');
    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY + (window.innerHeight / 3);

            const panels = document.querySelectorAll('.section');

            panels.forEach(panel => {
                const panelTop = panel.getBoundingClientRect().top + window.scrollY;
                const panelBottom = panelTop + panel.offsetHeight;

                if (panelTop <= scroll && panelBottom > scroll) {
                    setActiveColor(panel.dataset.color);
                }
            });
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`HomePage color-${activeColor}`}>
            <div className="intro section" data-color="dark"></div>
            <div className="education section" data-color="medium"></div>
            <div className="news section" data-color="light"></div>
            <div className="customer section" data-color="medium"></div>
        </div>
    )
}

export default HomeBackgroundEffect;