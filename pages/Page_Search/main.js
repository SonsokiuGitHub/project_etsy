var btnFilter = document.querySelector(".btn-close_box-search-filter");
var btnAllFilter = document.querySelector(".btn__all-filter");
var boxModalContainer = document.querySelector("#modal-container");
var boxSearchFilter = document.querySelector(".box-search-filter");
var modalFade = document.querySelector(".modal-fade");

var btnSort = document.querySelector(".control-right-third__btn");
var boxSortFilter = document.querySelector(".control-right-third");

var listPagination = document.querySelectorAll(".pagination-list li a")



btnFilter.onclick = function(){
    boxModalContainer.style.display = "none";
}

btnAllFilter.onclick = function(){
    boxModalContainer.style.display = "block";

}

modalFade.onclick = function(){
    boxModalContainer.style.display = "none";
}

btnSort.onclick = function(){
    if (btnSort.getAttribute("aria-expanded") == "false"){
        btnSort.setAttribute ("aria-expanded", "true")
    }
    else if (btnSort.getAttribute("aria-expanded") == "true"){
        btnSort.setAttribute ("aria-expanded", "false")
    }
}

listPagination.forEach(function(item, index){
    item.onclick = function(){
        const itemActive = document.querySelector(".pagination-list li a.active")
        itemActive.classList.remove("active")
        this.classList.add("active")
    }
})
