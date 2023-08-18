window.onload=function(){
var imgWrapper=document.getElementById("image-wrapper");
var img1=document.getElementById("img1");//BabyElephent
var img2=document.getElementById("img2");//BlackPanther
var img3=document.getElementById("img3");//Horse
var img4=document.getElementById("img4");//mouse-deer
var img5=document.getElementById("img5");//Kitten image
var img6=document.getElementById("img6");//Kitten image
var img=document.getElementsByTagName("img");
var SuccessMsg=document.getElementById("SuccesMSG");
var FailMsg=document.getElementById("FailMSG");
var WinMsg=document.getElementById("WinMsg");
var TryAgainButton=document.getElementById("TryAgain");
var NextButton=document.getElementById("Next");
var FindPanther=document.getElementById("panther");
var FindBabyElephent=document.getElementById("babyElephant");
var FindmouseDeer=document.getElementById("mouseDeer");
var FindHorse=document.getElementById("horse");
var FindKitten=document.getElementById("Kitten");
var FindBabyMonkey=document.getElementById("babyMonkey");
var nextbuton=document.getElementById("next");

//var number;
var Random1;
//Event Handlers

//img1.onclick=Process1;
//img2.onclick=Process2;
//img3.onclick=Process3;
//img4.onclick=Process4;
console.log(Math.floor(Math.random()*6));
imgWrapper.onclick=getRandomimage;

function getRandomimage(){
   // img1=1;
   // img2=2;
   // img3=3;
   // img4=4;
var Random1=Math.floor(Math.random()*6);
if(Random1=5){
    img1.style.order="1";
img2.style.order="3";
img3.style.order="4";
img4.style.order="5";
img5.style.order="2";
img6.style.order="5";




}

else if(Random1==3){

img1.style.order="4";
img2.style.order="3";
img3.style.order="2";
img4.style.order="1";
img5.style.order="6";
img6.style.order="5";

}
else if(Random1==2){
    img1.style.order="2";
img2.style.order="4";
img3.style.order="6";
img4.style.order="3";
img5.style.order="1";
img6.style.order="5";

}
else if(Random1==1){

    img1.style.order="3";
    img2.style.order="1";
    img3.style.order="5";
    img4.style.order="4";
    img5.style.order="6";
    img6.style.order="2";




}
else if(Random1==0)
{

    img1.style.order="1";
    img2.style.order="2";
    img3.style.order="3";
    img4.style.order="4";
    img5.style.order="5";
    img6.style.order="6";


}

//NextButton.onclick=MatchTheObject;



//else if(varRandom1==2){

   // img2.style.order="3";
//}
//else if()
}
FindBabyElephent.style.display="block";
        
img1.onclick=Success;
function Success(){
    SuccessMsg.style.display="block";
    NextButton.style.display="block";
    TryAgainButton.style.display="none";
    FailMsg.style.display="none";
    nextbuton.onclick=MatchTheObject;


}
img2.onclick=Fail;
img3.onclick=Fail;
img4.onclick=Fail;
img5.onclick=Fail;
            img6.onclick=Fail;

function Fail(){

    FailMsg.style.display="block";
    TryAgainButton.style.display="block";
    SuccessMsg.style.display="none";
    NextButton.style.display="none";


}
//nextbuton.onclick=MatchTheObject;

//Match the object logic
async function MatchTheObject(){


    
//for (i=0;i<4;i++){
   // if(i==0){
      /*  FindBabyElephent.style.display="block";
        
        img1.onclick=Success;
        function Success(){
            SuccessMsg.style.display="block";
            NextButton.style.display="block";
            TryAgainButton.style.display="none";
            FailMsg.style.display="none";

        }
        img2.onclick=Fail;
        img3.onclick=Fail;
        img4.onclick=Fail;

        function Fail(){

            FailMsg.style.display="block";
            TryAgainButton.style.display="block";
            SuccessMsg.style.display="none";
            NextButton.style.display="none";

        
        }
    }*/

    
        //if(img1.onclick=true){
            SuccessMsg.style.display="none";
            FindBabyElephent.style.display="none";


        FindPanther.style.display="block";

       
        
        img2.onclick=Success;
        function Success(){
            SuccessMsg.style.display="block";
            NextButton.style.display="block";
            TryAgainButton.style.display="none";
            FailMsg.style.display="none";
            NextButton.onclick=process2;

        }
        img1.onclick=Fail;
        img3.onclick=Fail;
        img4.onclick=Fail;
        img5.onclick=Fail;
            img6.onclick=Fail;

        function Fail(){

            FailMsg.style.display="block";
            TryAgainButton.style.display="block";
            SuccessMsg.style.display="none";
            NextButton.style.display="none";
            

         
        }

       //}

      function process2(){
      
        
        FindBabyElephent.style.display="none";
       
        
        FindPanther.style.display="none";

        FindHorse.style.display="block";

        img3.onclick=Success;

        function Success(){
            SuccessMsg.style.display="block";
            NextButton.style.display="block";
            TryAgainButton.style.display="none";
            FailMsg.style.display="none";
            NextButton.onclick=process3;

        }
        img2.onclick=Fail;
        img1.onclick=Fail;
        img4.onclick=Fail;
        img5.onclick=Fail;
            img6.onclick=Fail;

        function Fail(){

            FailMsg.style.display="block";
            TryAgainButton.style.display="block";
            SuccessMsg.style.display="none";
            NextButton.style.display="none";

         
        }
    }
}
    
        //if(img==3){

            function process3(){

                FindBabyElephent.style.display="none";
       
        
        FindPanther.style.display="none";

        FindHorse.style.display="none";
            FindmouseDeer.style.display="block";
            img4.onclick=Success;
            function Success(){
                SuccessMsg.style.display="block";
                NextButton.style.display="block";
                TryAgainButton.style.display="none";
                FailMsg.style.display="none";
                NextButton.onclick=process4;

    
            }
            img2.onclick=Fail;
            img1.onclick=Fail;
            img3.onclick=Fail;
            img5.onclick=Fail;
            img6.onclick=Fail;
    
            function Fail(){
    
                FailMsg.style.display="block";
                TryAgainButton.style.display="block";
                SuccessMsg.style.display="none";
                NextButton.style.display="none";
    
             
            }

            
        

       }


       function process4(){

        FindBabyElephent.style.display="none";
       
        
        FindPanther.style.display="none";

        FindHorse.style.display="none";
            FindmouseDeer.style.display="none";
        FindKitten.style.display="block";
        img5.onclick=Success;
        function Success(){
            SuccessMsg.style.display="block";
            NextButton.style.display="block";
            TryAgainButton.style.display="none";
            FailMsg.style.display="none";
            NextButton.onclick=process5;


        }
        img2.onclick=Fail;
        img1.onclick=Fail;
        img3.onclick=Fail;
        
        img4.onclick=Fail;
        img6.onclick=Fail;

        function Fail(){

            FailMsg.style.display="block";
            TryAgainButton.style.display="block";
            SuccessMsg.style.display="none";
            NextButton.style.display="none";

         
        }

        
    


   }
   function process5(){

    FindBabyElephent.style.display="none";
       
        
        FindPanther.style.display="none";

        FindHorse.style.display="none";
            FindmouseDeer.style.display="none";
        FindKitten.style.display="none";


    FindBabyMonkey.style.display="block";
        img6.onclick=Success;
        function Success(){
            SuccessMsg.style.display="none";
            NextButton.style.display="none";
            TryAgainButton.style.display="none";
            FailMsg.style.display="none";
            WinMsg.style.display="block";
            


        }

        img2.onclick=Fail;
        img1.onclick=Fail;
        img3.onclick=Fail;
        
        
        img4.onclick=Fail;
        img5.onclick=Fail;

        function Fail(){

            FailMsg.style.display="block";
            TryAgainButton.style.display="block";
            SuccessMsg.style.display="none";
            NextButton.style.display="none";
            WinMsg.style.display="none";

         
        }


   }
    }
      /* for(i=0;i<=3;i++){
        function Success(){
            SuccessMsg.style.display="block";
            NextButton.style.display="block";
            TryAgainButton.style.display="none";
            FailMsg.style.display="none";

        }

        function Fail(){

            FailMsg.style.display="block";
            TryAgainButton.style.display="block";
            SuccessMsg.style.display="none";
            NextButton.style.display="none";
            

         
        }

       switch (i) {
        case 0:
            FindBabyElephent.style.display="block";
        
            img1.onclick=Success;
            img2.onclick=Fail;
            img3.onclick=Fail;
            img4.onclick=Fail;
        break;
        case 1:
            FindPanther.style.display="block";
       
        
            img2.onclick=Success;
            img1.onclick=Fail;
        img3.onclick=Fail;
        img4.onclick=Fail;
        
        break;
        case 2:
            FindHorse.style.display="block";
            img3.onclick=Success;

            img3.onclick=Fail;
            img1.onclick=Fail;
            img4.onclick=Fail;
      
        break;
        case 3:
             
        FindmouseDeer.style.display="block";
        img3.onclick=Success;

        img2.onclick=Fail;
        img1.onclick=Fail;
        img4.onclick=Fail;
       
        break;
       /* case 5:
        val = "five"
        break;
        case 6:
        val = "six"
        break;
        case 7:
        val = "seven"
        break;
        case 8:
        val = "eight"
        break;
        case 9:
        val = "nine"
        break;
        case 10:
        val = "ten"
        break;
        default:
       
        } */
       //NextButton.onclick=MatchTheObject;

       
     
    
//}

