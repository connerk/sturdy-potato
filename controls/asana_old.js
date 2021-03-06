/**
 * Created by Scott Gilmour FEB2017
 * Adapted by Kevin Conner kconner@lithia.com MAR2017
 */
module.exports = function() {
	const url = "https://app.asana.com/api/1.0/tasks"
	
	function OnSuccess(d) {
		// callback function on success goes here.
		alert("Success: " + JSON.stringify(d.data));
	}
	function OnError(xhr) {
		// callback function on failure goes here.
		alert("Error: " + JSON.stringify(xhr));
	}
	function ComposeName() {
		return "Web App ADHOC Request - " + $("#iName").val();
	}
	function TypeOfReport() {
		let output = "";
		for (let i = 0; i < $(".iType:checked").length; i++) {
			let delimiter = (i > 0) ? ", " : "";
			// It's bad practice to put a call to the DOM inside a loop like below.  I'm using it strictly as a quick example.
			output = output + delimiter + $(".iType:checked:eq(" + i + ")").val();
		}
		return output;
	}
	function FormatDate(date) {
		let d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();
		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;
		return [year, month, day].join('-');
	}
	function NoteString() {
		return
		"Requestor Name: " + $("#iName").val() + "\n"
		+ "Requestor Email: " + $("#iEmail").val() + "\n\n"
		+ "Details: " + $("#iMessage").val() + "\n\n"
		+ "Date Range From: " + Asana.FormatDate($("#iBeginDate").val()) + "\n"
		+ "Date Range To: " + Asana.FormatDate($("#iEndDate").val()) + "\n"
		+ "Type of Report: " + Asana.TypeOfReport() + "\n"
		+ "Frequency: " + $(".iFrequency:checked").val() + "\n"
		+ "Employee Type: " + $(".iEmployees:checked").val() + "\n"
		+ "Wage Info: " + $(".iWage:checked").val();
	}
	function SubmitAction(e) {
		//e.preventDefault();
		if (Asana.ValidateForm()) {
			$.ajax({
				method: "post",
				url: "https://app.asana.com/api/1.0/tasks",
				data: {
					name: Asana.ComposeName(),
					due_on: Asana.FormatDate($("#iDueDate").val()),
					notes: Asana.NoteString(),
					projects: "" // Change ID to "230889219404178" for AD HOC Requests project.
				},
				headers: {
					"Authorization": "" // Change personal access token here.
				},
				crossDomain: true,
				success: function (d) {
					Asana.OnSuccess(d);
					//console.log(d.data);
				},
				error: function (xhr) {
					Asana.OnError(xhr);
					//console.log(xhr);
				}
			});
		}
	}
}
