const header = document.querySelector("nav")

 const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("fade-in")
const remove_class_on_scroll = () => header.classList.remove("fade-in")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

  console.log(scrollpos)
})

// --------------------------------PANELS------------------
let panelButtons = document.querySelectorAll(".button_container button")
let panelTabs = document.querySelectorAll(".tabContainer .panel")

  console.log(panelTabs);
const showPanels = (index) => {
  let colorCode = "teal"
  panelButtons.forEach( (node) => {
    node.style.backgroundColor = ""
    node.style.color=""
  })
  panelTabs.forEach((node) => {
    node.style.display="none"
  })
  panelButtons[index].style.backgroundColor = colorCode;
  panelButtons[index].style.color = "white"
  panelTabs[index].style.display= "block"
  // panelTabs[index].style.backgroundColor = colorCode;
  // panelTabs[index].style.color = white;
}

showPanels(0)