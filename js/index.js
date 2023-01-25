const handleClick = (id) => {
    const element = document.getElementById(id)
    if(element.style.display === "block") {
        element.style.display = "none"
        return;
    }
    element.style.display = "block"
}