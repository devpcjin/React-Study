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
                key: "4",
                label: "Section 4. JSX 문법",
            },
        ],
    },
    {
        label: "Chapter 3. 컴포넌트",
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
