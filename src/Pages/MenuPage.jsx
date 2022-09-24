import { useNavigate } from "react-router-dom";


export default function Menu() {
    const navigate = useNavigate()

    const first = () => {
        navigate("/FirstPage")
    }
    const second = () => {
        navigate("/SecondPage")
    }
    const third = () => {
        navigate("/ThirdPage")
    }
    const fourth = () => {
        navigate("/FourthPage")
    }
    const fifth = () => {
        navigate("/FifthPage")
    }
    return (
        <div>
            <button onClick={first}>FirstPage</button>
            <button onClick={second}>SecondPage</button>
            <button onClick={third}>ThirdPage</button>
            <button onClick={fourth}>FourthPage</button>
            <button onClick={fifth}>FifthPage</button>
        </div>
    )
}