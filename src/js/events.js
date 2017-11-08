var events = (function() {

  function _event(type, eventObject) {
    var newEvent = {
      type: type,
      event: eventObject,
      timestamp: helper.getDateTime()
    }
    return newEvent;
  };

  function store(type, eventObject) {
    sheet.getCharacter().events.push(_event(type, eventObject));
    console.log(sheet.getCharacter().events);
  };

  function render() {
    var heading = "XP log";
    var container = document.createElement("div");
    container.setAttribute("class", "container");

    if (sheet.getCharacter().events.length > 0) {
      for (var i in sheet.getCharacter().events) {
        var eventObject = sheet.getCharacter().events[i];
        if (eventObject.type == "xp") {
          var row = document.createElement("div");
          row.setAttribute("class", "row");

          var col4 = document.createElement("div");
          col4.setAttribute("class", "col-xs-12 col-sm-6");

          var col8 = document.createElement("div");
          col8.setAttribute("class", "col-xs-12 col-sm-6");

          var hr = document.createElement("hr");

          var type = document.createElement("p");
          if (eventObject.event.aggregateValue > 0) {
            type.textContent = "+" + eventObject.event.aggregateValue + " XP"
          } else {
            type.textContent = eventObject.event.aggregateValue + " XP"
          };

          var date = document.createElement("p");
          var days = ["Sun", "Mon", "Tue", 'Wed', "Thu", "Fri", "Sat"];
          var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          date.textContent =
          eventObject.timestamp.hours +
          ":" +
          eventObject.timestamp.minutes +
          ", " +
          days[eventObject.timestamp.day] +
          " " +
          eventObject.timestamp.date +
          " " +
          months[eventObject.timestamp.month] +
          " " +
          eventObject.timestamp.year;

          col8.appendChild(type);
          col4.appendChild(date);
          row.appendChild(col8);
          row.appendChild(col4);
          container.appendChild(row);
        };
      };
      modal.render(heading, container);
    };
  };

  // exposed methods
  return {
    render: render,
    store: store
  };

})();
