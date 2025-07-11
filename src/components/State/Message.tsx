import { useState } from "react";

function Message () {
    const [state, setState] = useState("dileep");
    return (
        <>
            <div>This is from message component and the state is: {state}</div>
        </>
    )
}

export default Message;