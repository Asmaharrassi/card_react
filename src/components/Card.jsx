function Card({Children}){
    console.log('welcome')
    return (
    <div className="card">
        <img src={"Imag1"} alt="profile picture"></img>
        <h3>Design</h3>
        <h3>$57</h3>
        <p>Machine Learning A-Z™:</p>
        <p>Hands-On Python & R In Data...</p>
        <p>5.0</p>
        <p>265.7K</p>
        <p>students</p>
        
    
        {Children}
    </div>
   
)}
export default Card