import React from 'react'
import { useState } from 'react';
function ProductImages({imgs=[{url:""}]}) {
    const[MainImage,setMainImage]= useState(imgs[0]);
  return (
    <>
    <div className='flex float-right mt-8 '>
    <div class="grid grid-cols-1 gap-2 ">
{imgs.map((curElm,index) =>{
return(
<figure>
    <img
    src={curElm.url}
    key={index}
    className='h-auto w-24 object-cover '
    onClick={()=> setMainImage(curElm)}/>
</figure>

);

})}
</div>
<div className='mr-2 ml-4 mt-8'>

    <img src={MainImage.url}
    className='h-auto w-64'/>
</div>
</div>
    </>
  )
}

export default ProductImages