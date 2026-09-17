const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('scrollinate');
        } else {
            entry.target.classList.remove('scrollinate');
        }
    })
})

const preScrollElements = document.querySelectorAll(".service_card, .anim_wrapper");
preScrollElements.forEach((element) => observer.observe(element));