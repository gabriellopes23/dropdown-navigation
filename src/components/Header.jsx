import './Header.css'
import React, { useState } from "react";
import logo from '../assets/images/logo.svg'
import iconUp from '../assets/images/icon-arrow-up.svg'
import iconDown from '../assets/images/icon-arrow-down.svg'
import iconTodo from '../assets/images/icon-todo.svg'
import iconCalendar from '../assets/images/icon-calendar.svg'
import iconReminders from '../assets/images/icon-reminders.svg'
import iconPlanning from '../assets/images/icon-planning.svg'
import menu from '../assets/images/icon-menu.svg'
import closeMenu from '../assets/images/icon-close-menu.svg'

export default props => {
    const [isMobile, setIsMobile] = useState(false)

    return (
        <section className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
                <section className={isMobile ? 'mobile-itens' : 'section'}>
                    <section className='pai'>
                        <nav className='navBar'>
                            <ul>
                                <li className='dropdown'>
                                    <a href="#" className='features'>Features <img src={iconDown} className='icon-down' />
                                        <img src={iconUp} className='icon-up' />
                                    </a>
                                    <div className={isMobile ? 'dropdown-mobile' : "dropdown-content"}>
                                        <a href="#">
                                            <img src={iconTodo} className='dropdown-menu-icons' /> Todo List
                                        </a>
                                        <a href="#">
                                            <img src={iconCalendar} className='dropdown-menu-icons' /> Calendar
                                        </a>
                                        <a href="#">
                                            <img src={iconReminders} className='dropdown-menu-icons' /> Reminders
                                        </a>
                                        <a href="#">
                                            <img src={iconPlanning} className='dropdown-menu-icons' /> Planning
                                        </a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className='company'>Company <img src={iconDown} className='icon-down' />
                                        <img src={iconUp} className='icon-up' />
                                    </a>
                                    <div className={isMobile ? 'dropdown-mobile' : "dropdown-content"}>
                                        <a href="#">History</a>
                                        <a href="#">Our Team</a>
                                        <a href="#">Blog</a>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">Carreira</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                    <section className='sing-up'>
                        <div>
                            <button className='login'>Login</button>
                            <button className='register'>Register</button>
                        </div>
                    </section>
                </section>
                <button className='mobile-icon' onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <img src={closeMenu} /> : <img src={menu} />}
                </button>
        </section>
    )
}