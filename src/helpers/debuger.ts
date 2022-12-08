const debug = process.env.REACT_APP_DEBUG;
const Debugger = (message: String) => {
    if (debug !== "false") {
        console.log(message);
    }
}

export default Debugger;