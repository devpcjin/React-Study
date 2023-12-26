const navigationItem = [
    {
        label: "React Study",
        key: "/main/study",
    },
];

const headerNavigationItem = [
    {
        label: "Home",
        key: "/",
    },
    {
        label: "React Study",
        key: "/study",
    },
    {
        label: "Retrieve",
        key: "/retrieve",
    },
    {
        label: "Ask",
        key: "/ask",
    },
];

const homeSidebarItem = [
    {
        label: "Home",
        key: "/home",
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
        label: "State",
        key: "/study/state",
    },
    {
        label: "Ref",
        key: "/study/ref",
    },
];

export {
    navigationItem,
    headerNavigationItem,
    studySidebarItem,
    homeSidebarItem,
};
