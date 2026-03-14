
import './Investment.css'
import React, {useState} from 'react'


const Investment = () => {

  const [invest1, setInvest1] = useState("")
  const [invest2, setInvest2] = useState("")
  const [invest3, setInvest3] = useState("")


  const [msg1,setMsg1]= useState("")
  const [msg2,setMsg2]= useState("")

  const [msg3,setMsg3]= useState("")


  const funct =(invest, setMsg, min) =>{
    if(invest === ""){
      setMsg("You must enter the amount")
    }

    else if (Number(invest) < min){
      setMsg ("Amount has to be more than "+ min.toLocaleString())
    }

    else{
      setMsg("Success! Your amount has been taken")
    }
  }



  return (
    <div className='whole'>

        <div className='innbox'>
          <div className='puttxt'>
            <h3 className='heading'>Investment</h3>
            <p className='detils'>At KevTrading, our investment philosophy is built on discipline, innovation, and long-term value creation. We focus on identifying high-growth opportunities across global markets, combining advanced research with data-driven strategies to deliver consistent performance. Our portfolio spans equities, alternative assets, and strategic ventures designed to maximize returns while carefully managing risk.

We believe successful investing requires patience, precision, and adaptability. By leveraging market insights, cutting-edge technology, and experienced financial expertise, KevTrading aims to help clients grow their capital sustainably and achieve their financial goals with confidence.</p>
           
</div>

 <section className='inves'>

  <div className='smallbox1'>
  <div className='money1'>

  <h4 className='ttone'>Invest $100k to $1million </h4>
  <input type='numbers' placeholder='Please type your amount' className='inputtxt1'  value={invest1} onChange={(e)=>setInvest1(e.target.value)}/>
  <button className='btnone' onClick={()=>funct(invest1,setMsg1,100000)}>Invest</button>
  
  {msg1 && (
    <p className={msg1.includes("Success") ? "success" : "error"}>
      {msg1}
    </p>
  )}

  </div>
           </div>

           <div className='smallbox1'>
  <div className='money1'>

  <h4 className='ttone'>Invest $1million to $100 million </h4>
  <input type='numbers' placeholder='Please type your amount' className='inputtxt1' value={invest2} onChange={(e)=> setInvest2(e.target.value)}/>
  <button className='btnone' onClick={()=>funct(invest2,setMsg2,1000000)}>Invest</button>

   {msg2 && (
    <p className={msg2.includes("Success") ? "success" : "error"}>
      {msg2}
    </p>
      )}

  </div>
           </div>

           <div className='smallbox1'>
  <div className='money1'>

  <h4 className='ttone'>Invest $100 million to $1 billion </h4>
  <input type='numbers' placeholder='Please type your amount' className='inputtxt1' value={invest3} onChange={(e)=> setInvest3(e.target.value)}/>
  <button className='btnone' onClick={()=>funct(invest3,setMsg3,100000000)}>Invest</button>

    {msg3 && (
    <p className={msg3.includes("Success") ? "success" : "error"}>
      {msg3}
       </p>
        )}

  </div>
           </div>



        </section>

 

        </div>

        

       



    </div>
  )
}

export default Investment