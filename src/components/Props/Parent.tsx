import Child from "./Child";

function Parent() {
    return (
        <div>
            {/* Here we are sending props to child component */}
            <Child name ="Dileep"/>
        </div>
    )
}
export default Parent;