(function(){

	let failedCount = 0;

	let NameEl = document.querySelector("#iName");
	if (NameEl.value.length < 3) {
		NameEl.className = "error";
		failedCount = failedCount + 1;
	} else {
		NameEl.className = "";
	}

	let EmailEl = document.querySelector("#iEmail");
	let filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if (filter.test(EmailEl.value)) {
		EmailEl.className = "";
	} else {
		EmailEl.className = "error";
		failedCount = failedCount + 1;
	}

	let TypeEl = document.querySelector(".iType:checked");
	if (TypeEl.value.length === 0) {
		$(".iType").addClass = "error";
		failedCount = failedCount + 1;
	} else {
		$(".iType").removeClass = "error";
	}

	let BeginDateEl = document.querySelector("#iBeginDate");
	if (BeginDateEl.value.length === 0) {
		BeginDateEl.className = "error";
		failedCount = failedCount + 1;
	} else {
		BeginDateEl.className = "";
	}

	let EndDateEl = document.querySelector("#iEndDate");
	if (EndDateEl.value.length === 0) {
		EndDateEl.className = "error";
		failedCount = failedCount + 1;
	} else {
		EndDateEl.className = "";
	}

	let txtBoxEl = document.querySelector("textarea[name='MESSAGE:']");
	let characterCount = txtBoxEl.getAttribute("data-minlength");

	if (txtBoxEl.value.length < characterCount) {
		txtBoxEl.className = "error";
		failedCount = failedCount + 1;
	} else {
		txtBoxEl.className = "";
	}

	let DueDateEl = document.querySelector("#iDueDate");
	if (DueDateEl.value.length === 0) {
		DueDateEl.className = "error";
		failedCount = failedCount + 1;
	} else {
		DueDateEl.className = "";
	}

	return (failedCount > 0) ? false : true;
})();