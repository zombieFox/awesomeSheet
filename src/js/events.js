var events = (function() {

  function bind() {
    var eventXp = helper.e(".js-evets-xp");
    eventXp.addEventListener("click", function(){
      event.stopPropagation();
      event.preventDefault();
      render();
    }, false)
  };

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
    // console.log(sheet.getCharacter().events);
  };

  function render() {
    var heading = "XP log";
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    var all_events = JSON.parse(JSON.stringify(sheet.getCharacter().events)).reverse();
    if (all_events.length > 0) {
      for (var i in all_events) {
        var eventObject = all_events[i];
        if (eventObject.type == "xp") {
          var tr = document.createElement("tr");
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");

          var type = document.createElement("p");
          if (eventObject.event.aggregateValue > 0) {
            type.textContent = "+" + eventObject.event.aggregateValue + " XP"
          } else {
            type.textContent = eventObject.event.aggregateValue + " XP"
          };

          var date = document.createElement("p");
          date.setAttribute("class", "u-small-text");
          date.textContent = _timestampString(eventObject.timestamp);

          td2.appendChild(type);
          td1.appendChild(date);
          tr.appendChild(td2);
          tr.appendChild(td1);
          tbody.appendChild(tr);
        };
      };
      table.appendChild(tbody);
      modal.render(heading, table, "Close", false, "small");
    };
  };

  function _xpWealthString() {

  }

  function _timestampString(timestamp) {
    var _prefixMinutes = function(minutes) {
      if (minutes < 10) {
        minutes = "0" + minutes;
      };
      return minutes;
    };
    var days = ["Sun", "Mon", "Tue", 'Wed', "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var timestampString =
      timestamp.hours + ":" +
      _prefixMinutes(timestamp.minutes) + ", " +
      days[timestamp.day] + ", " +
      timestamp.date + " " +
      months[timestamp.month] + " " +
      timestamp.year;
    return timestampString;
  };

  // exposed methods
  return {
    bind: bind,
    render: render,
    store: store
  };

})();
