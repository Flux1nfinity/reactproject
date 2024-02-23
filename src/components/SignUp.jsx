import './styles.css'
function SignUp() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <form className='transformY-20'>
                <div className='marginY-5 width-100'>
                    <label className='color-red capitalized size-32'>Username</label><br></br>
                    <div className='marginY-1'>
                        <input className='width-50 height-3 radius-25 size-32 text-center' type='text' name='Username'></input>
                    </div>
                </div>
                <div className='marginY-5 width-100'>
                    <label className='color-red capitalized size-32'>Password</label><br></br>
                    <div className="marginY-1">
                        <input className='width-50 height-3 radius-25 size-32 text-center' type='text' name='Password'></input>
                    </div>
                </div>
                <div className='marginY-5'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default SignUp