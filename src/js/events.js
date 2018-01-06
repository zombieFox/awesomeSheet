var events = (function() {

  function bind() {
    var all_eventLogs = helper.eA(".js-evets-log");
    for (var i = 0; i < all_eventLogs.length; i++) {
      all_eventLogs[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        render(this);
      }, false)
    };
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

  function render(button) {
    var options = helper.makeObject(button.dataset.eventsOptions);
    var _create_eventTr = function(eventObject) {
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
        if (options.type == "xp") {
          data = data + " XP";
        } else if (options.type == "wealth") {
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
    var _create_eventTable = function() {
      var table = document.createElement("table");
      var tbody = document.createElement("tbody");
      var all_events = helper.getObject({
        object: sheet.getCharacter(),
        path: "events"
      });
      var all_eventsToRender = [];
      if (options.type == "xp") {
        all_events.forEach(function(object) {
          if (object.type == "xp") {
            all_eventsToRender.push(object);
          };
        });
      } else if (options.type == "wealth") {
        all_events.forEach(function(object) {
          if (object.type == "platinum" || object.type == "gold" || object.type == "silver" || object.type == "copper") {
            all_eventsToRender.push(object);
          };
        });
      };
      // console.log("all_eventsToRender", all_eventsToRender);
      if (all_eventsToRender.length > 0) {
        for (var i in all_eventsToRender) {
          tbody.appendChild(_create_eventTr(all_eventsToRender[i]));
        };
      } else {
        var table = document.createElement("table");
        var tbody = document.createElement("tbody");
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var para = document.createElement("p");
        para.textContent = options.emptyMessage;
        td.appendChild(para);
        tr.appendChild(td);
        tbody.appendChild(tr);
      };
      table.appendChild(tbody);
      return table;
    };
    var modalBody = _create_eventTable();
    modal.render({
      heading: options.modalHeading,
      content: modalBody,
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
