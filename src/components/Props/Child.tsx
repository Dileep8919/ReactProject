function Child(props:any) {
    return (
        <div>
            {/* here we are receiving props from parent */}
            <h2>This is child component and the props: {props.name}</h2>
        </div>
    )
}
export default Child;