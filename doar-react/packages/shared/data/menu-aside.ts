import {
    Users,
    PieChart,
    Trello
} from "react-feather";

const asideMenus = [
    {
        id: 1,
        label: "Dashboard",
        url: "/",
        Icon: PieChart,
        submenu: [
            {
                id: 11,
                label: "Persons",
                url: "/classic-plus/dashboard-one",
                Icon: Users,
            },
            {
                id: 12,
                label: "Projects",
                url: "/classic-plus/dashboard-two",
                Icon: Trello,
            },
            {
                id: 13,
                label: "Skills",
                url: "/classic-plus/dashboard-three",
                Icon: Trello,
            },
            {
                id: 14,
                label: "Sectors",
                url: "/classic-plus/dashboard-four",
                Icon: Trello,
            },
        ],
    }
];

export default asideMenus;
