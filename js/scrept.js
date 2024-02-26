window.onscroll = ()=>
{
   if(this.scrollY > 60 )
   {
       $(".d-btn .btn").css({
       
           "right" : "18px",           
           "transition" : ".3s",

       })
      
    }
    else 
   {
       $(".d-btn .btn").css({      
           "right" : "-50px",
           "transition" : ".3s",

       })
     
   }

  
  
}
$(".d-btn .btn").click(function(){
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
 })
 $(".append").click(()=>{
    $(".add1").append(
        ` <div class="bgwhite">
        <p class="Assigmn">Assigmn check list to task </p>
        <span><i class="fa fa-list"></i></span>
        <span class="iconlist"><i class="fa fa-calendar"></i>   0/5</span>
        <span class=" caracter">A</span>
       </div>
        `
    )
 })
 $(".append2").click(()=>{
    $(".add2").append(
        ` <div class="bgwhite">
        <p class="Assigmn">Assigmn check list to task </p>
        <span><i class="fa fa-list"></i></span>
        <span class="iconlist"><i class="fa fa-calendar"></i>   1/4</span>
        <span class=" caracter">A</span>
       </div>
        `
    )
 })
 $(".append3").click(()=>{
    $(".add3").append(
        `   <div class="bgwhite">
        <p class="Assigmn">View task Log </p>
        <span class="bgreen"><i class="fa fa-calendar"></i>   Apr 27</span>
        <span><i class="iconlist fa fa-list"></i></span>
        
        <span class=" caracter">A</span>
    </div>
        `
    )
 })
 $(".append4").click(()=>{
    $(".add4").append(
        `   <div class="bgwhite">
        <p class="Assigmn">Due Tasks </p>
        <span class="bgreen"><i class="fa fa-calendar"></i>   Apr 27</span>
        <span><i class="iconlist fa fa-list"></i></span>
        
        <span class=" caracter">A</span>
    </div>
        `
    )
 })

