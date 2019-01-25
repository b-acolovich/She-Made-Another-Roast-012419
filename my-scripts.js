//create count in the database
if (localStorage.getItem("count") == null) {
	localStorage.setItem("count",0)
}

//update the html to reflect the database
function update(){
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()

//add one to count
function plusOne(){
	localStorage.setItem("count",Number(localStorage.getItem("count"))+1)
	update()
}

//rest count
function reset() {
	if(confirm("Are you sure you want to rest?")){
		localStorage.setItem("count",0)
		update()
	}
}