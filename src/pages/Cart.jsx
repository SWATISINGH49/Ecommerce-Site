import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/footer'
import { useState } from 'react'



function Cart() {
    const [Quantity,setQuantity]=useState(1)
    const [price ,setPprice]= useState(100)
   function IncreaseQuantity (){
    if(Quantity >=10){
        alert('maximun 10 quatity ')
        return 
        
    } 
  
        setQuantity(Quantity  +1) 
    }
    function DecreaseQuantity(){
       
        if( Quantity <=1){
            alert('minimum size 1 ')
            return
        }
        setQuantity(Quantity -1)
    }

    

  return (


    <div>
        <Header />
        <div><h2>carts</h2>
        
        <div>
            <img src='https://www.zzzone.co.uk/wp-content/uploads/2021/05/Creative-Product-Photography-2.jpg' className='w-1/4'/>
            <title>Serum</title>
            <p >price: {price*Quantity}</p>
            <p>offer: 50%</p>
            <h4>final price:{price*Quantity*50/100}</h4>
            <button className='bg-red-300 ml-4 p-4 b-2' onClick={DecreaseQuantity}>-</button><span className='text-center ml-2' >{Quantity}</span><button className='bg-green-300 ml-4 p-4 b-2'onClick={IncreaseQuantity} >+</button>
           
        </div>

        </div>
        <Footer />
    </div>
  )
}

export default Cart
