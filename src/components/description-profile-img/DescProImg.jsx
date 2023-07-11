import protofolieImg from "../../assets/images/welcome.jpg"
import './DescProImg.css';


function DescProImg() {
return (
    <>
        <div className="SiteImg">
            <img 
            src={protofolieImg} 
            alt='Welcome-to-my-protofolie'
            />
        </div>
    </>
)
}

export default DescProImg;