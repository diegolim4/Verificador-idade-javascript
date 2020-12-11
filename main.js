function conferir(){
    var data = new Date()
    var ano = data.getFullYear() // pegar os 4 digitos do ano 
    var user_ano = document.getElementById('ano') // o ano que o usuário ira colocar no input
    var res = document.getElementById('res')

    if(user_ano.value.length == 0 || user_ano.value > ano ){
        window.alert('Erro nos dados')
    }
    else{
        var user_sex = document.getElementsByName('sex')
        var user_idade = ano - user_ano.value
        
        var genero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto') //id da imagem
        if (user_sex[0].checked){
            
            genero = 'Homem'
            
            if (user_idade >=0 && user_idade <12){
                img.setAttribute('src', './img/child_m.png')
            }else if (user_idade < 21){
                img.setAttribute('src', './img/young_m.png')

            }else if (user_idade < 50){
                img.setAttribute('src', './img/adult_m.png')

            }else{
                img.setAttribute('src', './img/old_m.png')
            }
        
        }else if (user_sex[1].checked){
            genero = 'Mulher'

            if (user_idade >=0 && user_idade <12){
                img.setAttribute('src', './img/child_w.png')
            
            }else if (user_idade < 21){
                img.setAttribute('src', './img/young_w.png')
            }else if (user_idade < 50){
                img.setAttribute('src', './img/adult_w.png')
            }else{
                img.setAttribute('src', './img/old_w.png')
            }                   
        
        }res.innerHTML = ` ${genero} com idade de ${user_idade} anos.`
         res.appendChild(img)
    }    
}    

