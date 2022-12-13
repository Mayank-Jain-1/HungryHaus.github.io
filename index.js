function toggleFilters(){
  const item = document.getElementById("filters");
  if (item.classList.contains("noDisplay")){
    item.classList.remove("noDisplay");
  }
  else{
    item.classList.add("noDisplay");
  }
}