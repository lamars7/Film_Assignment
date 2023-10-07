/*jQuery(document).ready(function() {
    setTimeout(function() {
        console.log("d")
    }, 10000);
});

	var tbody = document.querySelector("tbody");
var pageUl = document.querySelector(".pagination");

var tr = tbody.querySelectorAll("tr");
var emptyBox = [];
var index = 1;
var itemPerPage = 100;

for (let i = 0; i < tr.length; i++) { emptyBox.push(tr[i]); }
console.log(tr.length + "lenegt")

function giveTrPerPage() {
	itemPerPage = Number(this.value);
	// console.log(itemPerPage);
	displayPage(itemPerPage);
	pageGenerator(itemPerPage);
	getpagElement(itemPerPage);
}

function displayPage(limit) {
	tbody.innerHTML = '';
	for (let i = 0; i < limit; i++) {
		tbody.appendChild(emptyBox[i]);
	}
	const pageNum = pageUl.querySelectorAll('.list');
	pageNum.forEach(n => n.remove());
}
displayPage(itemPerPage);

function pageGenerator(getem) {
	const num_of_tr = emptyBox.length;
	if (num_of_tr <= getem) {
		pageUl.style.display = 'none';
	} else {
		pageUl.style.display = 'flex';
		const num_Of_Page = Math.ceil(num_of_tr / getem);
		for (i = 1; i <= num_Of_Page; i++) {
			const li = document.createElement('li'); li.className = 'list';
			const a = document.createElement('a'); a.href = '#'; a.innerText = i;
			a.setAttribute('data-page', i);
			li.appendChild(a);
			pageUl.insertBefore(li, pageUl.querySelector('.next'));
		}
	}
}
pageGenerator(itemPerPage);
let pageLink = pageUl.querySelectorAll("a");
let lastPage = pageLink.length - 2;

function pageRunner(page, items, lastPage, active) {
	for (button of page) {
		button.onclick = e => {
			const page_num = e.target.getAttribute('data-page');
			const page_mover = e.target.getAttribute('id');
			if (page_num != null) {
				index = page_num;

			} else {
				if (page_mover === "next") {
					index++;
					if (index >= lastPage) {
						index = lastPage;
					}
				} else {
					index--;
					if (index <= 1) {
						index = 1;
					}
				}
			}
			pageMaker(index, items, active);
		}
	}

}
var pageLi = pageUl.querySelectorAll('.list'); pageLi[0].classList.add("active");
pageRunner(pageLink, itemPerPage, lastPage, pageLi);

function getpagElement(val) {
	let pagelink = pageUl.querySelectorAll("a");
	let lastpage = pagelink.length - 2;
	let pageli = pageUl.querySelectorAll('.list');
	pageli[0].classList.add("active");
	pageRunner(pagelink, val, lastpage, pageli);

}



function pageMaker(index, item_per_page, activePage) {
	const start = item_per_page * index;
	const end = start + item_per_page;
	const current_page = emptyBox.slice((start - item_per_page), (end - item_per_page));
	tbody.innerHTML = "";
	for (let j = 0; j < current_page.length; j++) {
		let item = current_page[j];
		tbody.appendChild(item);
	}
	Array.from(activePage).forEach((e) => { e.classList.remove("active"); });
	activePage[index - 1].classList.add("active");
}






$(document).keyup(function (e) {
	emptyBox = []
    if ($(".input1:focus") && (e.keyCode === 13)) {
	
		const text = e.target.value;
       //alert('ya!')
       		for (let i = 0; i < tr.length; i++) {
			const matchText = tr[i].querySelectorAll("td")[1].innerText;
			console.log(matchText)
			if (matchText.toLowerCase().includes(text.toLowerCase()) || matchText.toLowerCase().match(text.toLowerCase())) {
				tr[i].style.visibility = "visible";
			} else {
				tr[i].style.visibility = "collapse";
			}
		}
    }
 });

*/

/* function onSearch() {
const node = document.getElementById("input1")[0];
node.addEventListener("keyup", function(event) {
	if (event.key === "Enter") {
		for (let i = 0; i < tr.length; i++) {
			const matchText = tr[i].querySelectorAll("td")[1].innerText;
			console.log(matchText)
			if (matchText.toUpperCase().includes(text.toUpperCase())) {
				tr[i].style.visibility = "visible";
			} else {
				tr[i].style.visibility = "collapse";
			}
		}
	}
});
	// get the select element
	var select = document.getElementById("select-list1");

	// get the options in the select element
	var options = select.options;
	var selected = "title";
	var searchBy = 1; // 1 = title, 2 = movie id, 3 = director

	// find the selected option
	for (var i = 0; i < options.length; i++) {
		if (options[i].selected) {
			// the option is selected
			console.log(options[i].value);
			selected = options[i].value;  // outputs the value of the selected option
			if (selected == "title") {
				searchBy = 1;//  block of code to be executed if condition1 is true
			} else if (selected == "stars") {
				searchBy = 4;//  block of code to be executed if the condition1 is false and condition2 is true
			} else if (selected == "year") {
				searchBy = 3;//  block of code to be executed if the condition1 is false and condition2 is true
			}

			console.log("searchby = ", searchBy)
		}
	}
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("search-bar");
	filter = input.value.toUpperCase();
	table = document.getElementById("table");
	tr = table.getElementsByTagName("tr");



	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[searchBy];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}
*/


/*
Author 		: Ritesh Gandhi
DOC		    : 10-April-2017
Basic Usage 	: $('#table').hpaging({ "limit": 2 });;
*/

/*
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

//get the table
//get the table
//get the table
// Assign unique id's to each tr element

var itemsPerPage = 50;

// get total number of rows
var rows = $("#table tbody tr").length;

// calculate number of pages needed
var numPages = Math.ceil(rows / itemsPerPage);

// create pagination buttons
for (var i = 1; i <= numPages; i++) {
  $("#pagination").append("<button class='page-button'>" + i + "</button>");
}

// hide all rows initially
$("#table tbody tr").hide();

// show only the appropriate rows when a button is clicked
$(".page-button").click(function() {
  var pageNum = $(this).text();
  var startRow = (pageNum - 1) * itemsPerPage;
  var endRow = startRow + itemsPerPage;
  $("#table tbody tr").hide();
  $("#table tbody tr").slice(startRow, endRow).show();
});

$("#table tbody tr").slice(0, itemsPerPage).show();






