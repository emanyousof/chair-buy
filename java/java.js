var allproduct =document.querySelectorAll("   .section2        #btn6  ")
var content =document.querySelector( "#content")
var bt1=document.querySelector( "#bt1")
var price =document.querySelector("#del")
var totalprice=0



allproduct .forEach(function(item){
    item.onclick =function(){
        content.innerHTML += (item.getAttribute("product") )+"<br>"
        totalprice += +(item.getAttribute("price"))
        if(content.innerHTML !=""){
            bt1.style.display="block"
               bt1.style.backgroundColor="blue"
                  bt1.style.color="white"
                     bt1.style.width="100%"
                        bt1.style.height="40px"
                        bt1.style.marginTop=" 10px"
                        bt1.style. borderRadius="10px"


                        del.style.display="block"
                          del.style. backgroundColor=" red"
                            del.style.color="white"
                              del.style.width="15%"
                                del.style.height="40px"
                                  del.style.marginTop="10px"
                                    del.style.borderRadius="10px"


                                    content.style.backgroundColor="aqua"
                                     content.style.color="white"
                                      content.style.width="100%"
                                       content.style.textAlign="center"
                                        content.style.marginTop="10px"
                                         content.style.borderRadius="10px"





        }
    }
})
bt1.onclick=function(){
  document.write( totalprice)


}
bt1.onclick=function(){
    document.getElementById("price").innerHTML=totalprice + "<br>"
    price.style.marginTop="10px"
    price.style.width="100%"
    price.style.textAlign="center"
}
del.onclick=function(){
content.innerHTML="   "
document.getElementById("price").innerHTML=totalprice=0
del.style.display="none"
bt1.style.display="none"
}
       