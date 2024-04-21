import { useState } from "react";
import "../css/Feedback.css"
import { BsEmojiFrown } from "react-icons/bs";
import { BsEmojiExpressionless } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiGrin } from "react-icons/bs";




const Feedback = () => {
    const [emj1,setEmj1] = useState(false)
    const [emj2,setEmj2] = useState(false)
    const [emj3,setEmj3] = useState(false)
    const [emj4,setEmj4] = useState(false)


    function handleClick1(){
        setEmj1(true)
        setEmj2(false)
        setEmj3(false)
        setEmj4(false)
        setEmj1("Sorry for the inconvenience. We'll address the issue promptly :(")

    }
    function handleClick2(){
        setEmj2(true)
        setEmj3(false)
        setEmj4(false)
        setEmj1(false)
        setEmj2("Thanks for your feedback. We're always working to improve ):")
    }
    function handleClick3(){
        setEmj3(true)
        setEmj1(false)
        setEmj4(false)
        setEmj2(false)
        setEmj3("Glad you had a good experience! Thank you for your feedback :)")     


    }
    function handleClick4(){
        setEmj4(true)
        setEmj1(false)
        setEmj2(false)
        setEmj3(false)
        setEmj4("Your laughter brings joy! Thanks for the positive vibes and sharing the smiles >.<")


    }
    function handleOnSubmit(){
        alert("Feedback Submitted Successfully..!")
    }

    return (
        <div className="all">
            <form action="">
            <div className="contain">
                <div className="left">
                <h3>FEEDBACK</h3>
                <BsEmojiFrown className={`emoji ${emj1 ? 'clicked' : ''}`}onClick={handleClick1}/>
                <BsEmojiExpressionless className={`emoji ${emj2 ? 'clicked' : ''}`}onClick={handleClick2}/>
                <BsEmojiSmile className={`emoji ${emj3 ? 'clicked' : ''}`}onClick={handleClick3}/>
                <BsEmojiGrin className={`emoji ${emj4 ? 'clicked' : ''}`}onClick={handleClick4}/>
                <p>{emj1}</p>
                <p>{emj2}</p>
                <p>{emj3}</p>
                <p>{emj4}</p>

                </div>
                <div className="right">
                What was the reason for your visit? <br/><br />
                <select name="dropdown" id="dd" style={{padding:"15px", paddingRight:"150px", fontSize:"15px"}}>
                    <option value="select any value"> Select any one option</option>
                    <option value="Internships">Internships</option>
                    <option value="Hackathon">Hackathon</option>
                    <option value="Verbal Training">Verbal Training</option>
                    <option value="Mock Interviews">Mock Interviews</option>

                </select><br/><br />
                Please leave your feedback below <br/><br />
                <input type="text" /> <br /> <br />
                <button type="submit" onClick={handleOnSubmit}>Submit</button><br /><br />
                </div>
            </div>
            </form>
        </div>

    )
}

export default Feedback;