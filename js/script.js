window.onload=function(){
 
    const btn = document.querySelector("#send")
    
    btn.addEventListener("click",function(e){
        e.preventDefault();
        const name =document.querySelector("#name-box");
        const value = name.value;
      document.getElementById("jpg").innerHTML=" usuario "+value
    }
    );
    btn.addEventListener("click",function(e){
        e.preventDefault();
        const comentario =document.querySelector("#coment-box");
        const value = comentario.value;
        document.getElementById("comentario1").innerHTML="comentario "+value
    });
    
    
    
    
    
    var stars = document.querySelectorAll('.star-icon');
    
            document.addEventListener('click',function(e){
                var classStar = e.target.classList;
                if(!classStar.contains('ativo')){
                    stars.forEach(function(star){
                        star.classList.remove('ativo');
                    });
                    classStar.add('ativo');
                    console.log(e.target.getAttribute('data-avaliacao'));
                }
            });
    
    }
    
    
        