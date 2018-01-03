var events = (function() {

  function bind() {
    var eventXp = helper.e(".js-evets-xp");
    var eventWealth = helper.e(".js-evets-wealth");
    eventXp.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      render("xp");
    }, false)
    eventWealth.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      render("wealth");
    }, false)
  };

  function _create_event(type, eventObject) {
    var newEvent = {
      type: type,
      event: eventObject,
      timestamp: helper.getDateTime()
    };
    return newEvent;
  };

  function store(type, eventObject) {
    sheet.getCharacter().events.unshift(_create_event(type, eventObject));
    sheet.storeCharacters();
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

  function _create_eventTr(eventLogType, eventObject) {
    // console.log(eventLogType, eventObject);
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var para = document.createElement("p");
    var data;
    if ("aggregate_value" in eventObject.event) {
      data = eventObject.event.aggregate_value.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      if (eventObject.event.aggregate_value > 0) {
        data = "+" + data;
      };
      if (eventLogType == "xp") {
        data = data + " XP";
      } else if (eventLogType == "wealth") {
        if (eventObject.type == "platinum") {
          data = data + " PP";
        } else if (eventObject.type == "gold") {
          data = data + " GP";
        } else if (eventObject.type == "silver") {
          data = data + " SP";
        } else if (eventObject.type == "copper") {
          data = data + " CP";
        };
      };
    } else if ("note" in eventObject.event) {
      data = eventObject.event.note;
    };
    para.textContent = data;
    var timestamp = document.createElement("p");
    timestamp.setAttribute("class", "u-small-text u-text-right");
    timestamp.textContent = _timestampString(eventObject.timestamp);
    td2.appendChild(para);
    td1.appendChild(timestamp);
    tr.appendChild(td2);
    tr.appendChild(td1);
    return tr;
  };

  function _create_eventTable(eventLogType) {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    var all_events = helper.getObject({
      object: sheet.getCharacter(),
      path: "events"
    });
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
        var tr = _create_eventTr(eventLogType, all_eventsToRender[i]);
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
    modal.render({
      heading: heading,
      content: body,
      actionText: "Close",
      size: "small"
    });
    page.update();
  };

  function undo() {
    sheet.getCharacter().events.shift();
  };

  // exposed methods
  return {
    bind: bind,
    render: render,
    store: store,
    undo: undo
  };

})();
