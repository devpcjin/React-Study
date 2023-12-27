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
        label: "Chapter 2. JSX",
        key: "/study/chapter2",
        children: [
            {
                key: "2-4",
                label: "Section 4. JSX 문법",
            },
        ],
    },
    {
        label: "Chapter 3. 컴포넌트",
        key: "/study/chapter3",
        children: [
            {
                key: "3-3",
                label: "Section 3. props",
            },
            {
                key: "3-4",
                label: "Section 4. state",
            },
        ],
    },
];

export { headerNavigationItem, studySidebarItem };
