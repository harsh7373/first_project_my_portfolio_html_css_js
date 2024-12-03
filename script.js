//project hover animations script
let firework_animation=document.querySelector(".fireworks_animation")


firework_animation.addEventListener("mouseover",function fire_works_animation(){
    let firework_img=document.getElementById("project_1_img")
    firework_animation.style.opacity="100"
    firework_img.style.opacity="0"
    firework_animation.style.cursor="pointer"
})


firework_animation.addEventListener("mouseout",function fire_works_animation(){
    let firework_img=document.getElementById("project_1_img")
    firework_animation.style.opacity="0"
    firework_img.style.opacity="100"
    
})


firework_animation.addEventListener("click",function fire_works_animation(){
    
    window.location.href="https://harsh7373.github.io/Interactive-Display-Card-Project/"
    
})


    let colorfull_animation = document.querySelector(".colorfull_animation");


    colorfull_animation.addEventListener("mouseover",function color_full_animation(){
        let colorfull_img=document.getElementById("project_2_img")
        colorfull_animation.style.opacity="100"
        colorfull_img.style.opacity="0"
        colorfull_animation.style.cursor="pointer"
    })


    colorfull_animation.addEventListener("mouseout",function color_full_animation(){
        let colorfull_img=document.getElementById("project_2_img")
        colorfull_animation.style.opacity="0"
        colorfull_img.style.opacity="100"
        
    })

    
    colorfull_animation.addEventListener("click",function color_full_animation(){
    
        window.location.href="https://harsh7373.github.io/Rainbow-Refresh-Boxes-Project/"
        
    })

    let arrow_animation = document.querySelector(".arrow_animation");


    arrow_animation.addEventListener("mouseover",function arrow_animation_function(){
        let arrow_img=document.getElementById("project_3_img")
        arrow_animation.style.opacity="100"
        arrow_img.style.opacity="0"
        arrow_animation.style.cursor="pointer"
    })


    arrow_animation.addEventListener("mouseout",function arrow_animation_function(){
        let arrow_img=document.getElementById("project_3_img")
        arrow_animation.style.opacity="0"
        arrow_img.style.opacity="100"
        
    })


    // slider script

    let btn = document.getElementById("btn");
        let number = 1
        btn.addEventListener("click", function click() {

            number++
            let cont = document.querySelectorAll(".content");
            cont.forEach(function position(spans) {
                spans.style.right = 76 * number + "px"
            })

            if (number == 2) {
                number = -1
            }
        });