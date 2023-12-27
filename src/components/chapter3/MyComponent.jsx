const MyComponent = (props) => {
    return (
        <>
            <div>MyComponent가 전달받은 값: {props.value}</div>
            {props.children && <div>children 값: {props.children}</div>}
        </>
    );
};

MyComponent.defaultProps = {
    value: "기본 값",
};

export default MyComponent;
