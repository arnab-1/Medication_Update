function addReminder() {
  var medicationInput = document.getElementById("medication-input");
  var timeInput = document.getElementById("time-input");

  var medication = medicationInput.value;
  var time = timeInput.value;

  if (medication !== "" && time !== "") {
    var reminderItem = document.createElement("li");
    reminderItem.textContent = medication + " - " + time;

    var reminderList = document.getElementById("reminder-list");
    reminderList.appendChild(reminderItem);

    medicationInput.value = "";
    timeInput.value = "";
  }
}
