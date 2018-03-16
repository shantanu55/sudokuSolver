alert("Hi there,\nsudoku is an interesting game where in a grid of 9x9 is to be filled with numbers from 1 to 9. Few boxes are filled and rest are left as a challenge. \nThe rules are: \n1\) No repetition of numbers in row \n2\) No reptition of numbers in column \n3\) The grid is further divided into 9 sub-blocks of size 3x3 which also cannot have repetition.")

alert("This program solves a sudoku for you . You can copy sudoku from newspaper or internet and get its answer by feeding in values and then clicking the button.\n\nThis program does not check the legitimacy of your sudoku so please enter carefully.It also cannot solve every single sudoku on this planet.\n\nYour suggeations are awaited on improving the code and interface.")


$(function(){


function s(val){
   this.val=val;
   this.pos= [1,2,3,4,5,6,7,8,9,10] ;
}
var sud= new Array(81);

for(var i=0;i<81;i++){
   sud[i]= new s();
}
   $("#button1").click(function(){
  
     for(var j=0;j<81;j++) {
         if(document.getElementById('d'+j).value != "") {
            sud[j]= new s(val=document.getElementById('d'+j).value);
            sud[j].pos[9]=0;
         }
         
      }
    
   
   for(x=0;x<100;x++){
      var c=0;
      for(i=0;i<81;i++){
         if(sud[i].pos[9]!=0){
            var vari=0;ctr=0;
            m=(i-(((parseInt(i/9))%3)*9)-(i%3));
            for(var n=((parseInt(i/9))*9),j=i%9;j<81;n++,m++,j=j+9){
               for(var k=0;k<9;k++){
                  if(sud[i].pos[k]==sud[n].val||sud[i].pos[k]==sud[j].val||sud[i].pos[k]==sud[m].val){
                     sud[i].pos[k] =0;
                  } 
               } 
               if(m%3==2){
                  m=m+6; 
               }
            }
            ctr=0;
            vari=0;
            for(var n=0;n<9;n++){
               if(sud[i].pos[n]!=0){
                  ctr++;
                  vari=sud[i].pos[n]; 
               } 
            }
            if(ctr==1){
               document.getElementById('d'+i).parentElement.innerHTML=vari;
               sud[i].pos[9]=0;
               sud[i].val=vari;
            }
         } 
      }
   }
  })
})
