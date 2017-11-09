var events = (function() {

  function bind() {
    var eventXp = helper.e(".js-evets-xp");
    var eventWealth = helper.e(".js-evets-wealth");
    eventXp.addEventListener("click", function() {
      event.stopPropagation();
      event.preventDefault();
      render("xp");
    }, false)
    eventWealth.addEventListener("click", function() {
      event.stopPropagation();
      event.preventDefault();
      render("wealth");
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

  function _create_eventTable(eventLogType) {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    var all_events = JSON.parse(JSON.stringify(sheet.getCharacter().events)).reverse();
    var all_eventsToRender = [];
    if (eventLogType == "xp") {
      all_events.forEach(function(object) {
        if (object.type == "xp") {
          all_eventsToRender.push(object);
        };
      });
    } else if (eventLogType == "wealth") {
      all_events.forEach(function(object) {
        if (object.type == "platinum" || object.type == "gold" || object.type == "silver" || object.type == "copper") {
          all_eventsToRender.push(object);
        };
      });
    };
    // console.log("all_eventsToRender", all_eventsToRender);
    if (all_eventsToRender.length > 0) {
      for (var i in all_eventsToRender) {
        var tr = document.createElement("tr");
        if (eventLogType == "xp") {
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var type = document.createElement("p");
          var number = all_eventsToRender[i].event.aggregateValue.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
          if (all_eventsToRender[i].event.aggregateValue > 0) {
            type.textContent = "+" + number + " XP";
          } else {
            type.textContent = number + " XP";
          };
          var date = document.createElement("p");
          date.setAttribute("class", "u-small-text");
          date.textContent = _timestampString(all_eventsToRender[i].timestamp);
          td2.appendChild(type);
          td1.appendChild(date);
          tr.appendChild(td2);
          tr.appendChild(td1);
        } else if (eventLogType == "wealth") {
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var type = document.createElement("p");
          var number = all_eventsToRender[i].event.aggregateValue.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
          var wealthCoin;
          if (all_eventsToRender[i].type == "platinum") {
            wealthCoin = "PP";
          } else if (all_eventsToRender[i].type == "gold") {
            wealthCoin = "GP";
          } else if (all_eventsToRender[i].type == "silver") {
            wealthCoin = "SP";
          } else if (all_eventsToRender[i].type == "copper") {
            wealthCoin = "CP";
          };
          if (all_eventsToRender[i].event.aggregateValue > 0) {
            type.textContent = "+" + number + " " + wealthCoin;
          } else {
            type.textContent = number + " " + wealthCoin;
          };
          var date = document.createElement("p");
          date.setAttribute("class", "u-small-text");
          date.textContent = _timestampString(all_eventsToRender[i].timestamp);
          td2.appendChild(type);
          td1.appendChild(date);
          tr.appendChild(td2);
          tr.appendChild(td1);
        };
        tbody.appendChild(tr);
      };
    } else {
      var table = document.createElement("table");
      var tbody = document.createElement("tbody");
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      var message = document.createElement("p");
      if (eventLogType == "xp") {
        message.textContent = "No XP logged yet. Why not add some?";
      } else if (eventLogType == "wealth") {
        message.textContent = "No wealth logged yet. Why not add some?";
      };
      td.appendChild(message);
      tr.appendChild(td);
      tbody.appendChild(tr);
    };
    table.appendChild(tbody);
    return table;
  };

  function render(eventLogType) {
    var heading;
    if (eventLogType == "xp") {
      heading = "XP log";
    } else if (eventLogType == "wealth") {
      heading = "Wealth log";
    };
    var body = _create_eventTable(eventLogType);
    modal.render(heading, body, "Close", false, "small");
  };

  function pop() {
    sheet.getCharacter().events.pop();
  };

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
    store: store,
    pop: pop
  };

})();
