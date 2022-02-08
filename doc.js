
//permutations case n=p
function permutationSR(n){
if( n == 0){
    return 1}
else{
    return n  * permutationSR(n-1)}
}


//arrangementsSR case p<n o=yes r=no
function arrangementsSR(n, p){
if (p>n){
return 0}
x = 1
i = n-p+1
while (i <= n){
x *= i
i += 1}
return x 
}
//arrangement avec repetitions case n<p o=yes r=yes permutation avec repetition n=p o=yes r=yes
  
function arrAR_perAR(n,p) { // = permutations avec repetitions

  if (p != 0)
      return (n * arrAR_perAR(n, p - 1));
  else
      return 1;
}

//combinaisons case p<n o=no r=no
function combinaisons(n, p){
if (p > n){
    p = n-p}
x = 1
y = 1
i = n-p+1
while(i <= n){
    x = (x*i)//y
    y += 1
    i += 1}
return x 
}


function myFunction() {
    const n = document.querySelector("[name='n']").value;
   const p= document.querySelector("[name='p']").value;
   var s = document.getElementById("select");
   var s2 = document.getElementById("select2");

   var R = s.options[s.selectedIndex].value;
   var O = s2.options[s2.selectedIndex].value;

   const resultat = document.getElementById("resultat");   
    let nvalid=false;
    let pvalid=false;
    let selectvalid=false; 
    
   document.querySelector("[name='subm']").addEventListener("click", function(e){ // e = event parameter ya3ni l'evenement s'agit de quel type ?
   
    if(n!==""){nvalid = true};
   if(p!=="" ){pvalid = true};
    if(R!==""){selectvalid = true};
    if(O!==""){selectvalid2= true};

   // le type ta3 l'event 
   if (nvalid===false || pvalid===false || selectvalid=== false ||selectvalid2===false){
   console.log("smth wrong");
  resultat.innerHTML = "Tous les champs doit etre remplis!";
   e.preventDefault(); // ya3ni mayesra walo w submit matesrach this will stop the default submit behavior, which includes reload of page
   }else{

expr=n-p;
//CASE N=P
  if(expr==0 ){
    console.log(n,p,R,O)

    if(R == "yes"){
      if(O =="yes"){ 
      
      resultat.innerHTML = "C'est une permutation avec repetition le resultat est : "+`${arrAR_perAR(n,n)}`//VALIDATED

      }else{
        resultat.innerHTML = "Cas impossible"}

    }else{
      if(O =="yes"){
        
        resultat.innerHTML = "C'est une permutation sans repetition le resultat est : "+`${permutationSR(n)}`//VALIDATED

  
        }else{
          resultat.innerHTML = "C'est une combinaison sans repetiotion : "+`${combinaisons(n,p)}`

        }
  }
  }
//CASE N<p
  if(expr<0){
    if(R == 'yes'){
      if(O =='yes'){
      resultat.innerHTML = "C'est un arrangement avec repetition le resultat est : "+`${arrAR_perAR(n,p)}`

      }else{
        resultat.innerHTML = "Cas impossible"}
    }else{
      if(O =='yes'){
        resultat.innerHTML = "Cas impossible"
  
        }else{
          resultat.innerHTML = "Cas impossible"}

    }
  }
  //CASE N>P
  if(expr>0 ){
    if(R == 'yes'){
      if(O =='yes'){
      resultat.innerHTML = "C'est un arrangement avec repetition le resultat est : "+`${arrAR_perAR(n,p)}`//VALIDATED

      }else{
        resultat.innerHTML = "Cas impossible"

      }
    }else{
      if(O =="yes"){
        resultat.innerHTML = "C'est une arrangement sans repetition le resultat est : "+`${arrangementsSR(n,p)}`

        }else{
          resultat.innerHTML = "C'est une combinaison sans repetiotion : "+`${combinaisons(n,p)}`

    }
  }
}
   e.preventDefault();
   }
   });
   
   
   }
