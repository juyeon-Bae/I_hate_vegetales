import styles from "../styles/NavBar.module.css";
import { Link, useLocation } from "react-router-dom";

import Home from "../assets/images/home.png";
import HomeClicked from "../assets/images/home-clicked.png";
import post from "../assets/images/post.png";
import postClicked from "../assets/images/post-clicked.png";
import goal from "../assets/images/goal.png";
import goalClicked from "../assets/images/goal-clicked.png";
import mypage from "../assets/images/mypage.png";
import mypageClicked from "../assets/images/mypage-clicked.png";


export default function NavBar() {
    const location = useLocation();
    const path = location.pathname;

    const menus = [
        {
            id: 1,
            path: "/",
            defaultIcon: Home,
            clickedIcon: HomeClicked,
            label: "홈"
        },
        {
            id: 2,
            path: "/write-diary",
            defaultIcon: post,
            clickedIcon: postClicked,
            label: "게시글"
        },
        {
            id: 3,
            path: "/select",
            defaultIcon: goal,
            clickedIcon: goalClicked,
            label: "목표"
        },
        {
            id: 4,
            path: "/my-page",
            defaultIcon: mypage,
            clickedIcon: mypageClicked,
            label: "마이페이지"
        },
    ]

    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                {menus.map((item) => (
                    <li key={item.id} className={styles.li}>
                        <Link to={item.path} className={styles.link}>
                            <img className={styles.navBarImg}
                                src={path === item.path ? item.clickedIcon : item.defaultIcon} />

                            <span style={{
                                color: path === item.path ? "#3B6DFF" : "#B9BBB9",
                                fontSize: "12px"
                            }}>{item.label}</span>
                        </Link>
                    </li>
                ))}

            </ul>
        </nav>
    )
}