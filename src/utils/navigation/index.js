const headerNavigationItem = [
    {
        label: "Home",
        key: "/",
    },
    {
        label: "React Study",
        key: "/study",
    },
];

const studySidebarItem = [
    {
        label: "Chapter2",
        key: "/study/chapter2",
        children: [
            {
                key: "4",
                label: "jsx 문법",
            },
        ],
    },
    {
        label: "Chapter3",
        key: "/study/chapter3",
        children: [
            {
                key: "1",
                label: "jsx 문법",
            },
        ],
    },
];

export { headerNavigationItem, studySidebarItem };
