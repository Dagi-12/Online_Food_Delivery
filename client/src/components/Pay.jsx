import React from 'react'
import { FaMoneyCheckAlt } from "react-icons/fa";
import { total } from './ProductsSummary';
export default function Pay({fname,lname,email,tx_ref,public_key,}) {

  return (
    <div>
<form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
    <input type="hidden" name="public_key" value={public_key} />
    <input type="hidden" name="tx_ref" value={tx_ref} />
    <input type="hidden" name="amount" value={total} />
    <input type="hidden" name="currency" value="ETB" />
    <input type="hidden" name="email" value={email} />
    <input type="hidden" name="first_name" value={fname} />
    <input type="hidden" name="last_name" value={lname} />
    <input type="hidden" name="title" value="Let us do this" />
    <input type="hidden" name="description" value="Paying with Confidence with cha" />
    <input type="hidden" name="logo" value="https://yourcompany.com/logo.png" />
    <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
    <input type="hidden" name="return_url" value="http://localhost:3000/menu" />
    <input type="hidden" name="meta[title]" value="test" />
    <button type="submit" className='  bg-orange-400 rounded-md p-1.5 hover:bg-green-500 text-m text-bold '><FaMoneyCheckAlt className="inline-block mr-2  " />Pay Now</button>
</form>
</div>
  )
}
