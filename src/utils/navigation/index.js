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
    {
        label: "Chapter 4. 이벤트 핸들링",
        key: "/study/chapter4",
        children: [
            {
                key: "4-2",
                label: "Section2. 예제로 이벤트 핸들링 익히기",
            },
        ],
    },
];

export { headerNavigationItem, studySidebarItem };
