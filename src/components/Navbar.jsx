import './styles.css'
function Navbar() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <div id='navmenu' className="marginY-8">
                <a className="paddingX-4 no-decoration grey background-none" href="" target="_blank">
                    Home
                </a>
                <a className="paddingX-4 no-decoration grey background-none" href="" target="_blank">
                    Portfolio
                </a>
                <a className="paddingX-4 no-decoration grey background-none" href="" target="_blank">
                    Contact
                </a>
            </div>

            <div id='smallnavmenu' className="marginY-8">
                <a className="no-decoration grey background-none size-32" href="" target="_blank">
                    +
                </a>
            </div>
        </>
    )
}

export default Navbar