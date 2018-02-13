var events = (function() {

  function bind() {
    _bind_all_eventsLog();
    _bind_all_eventsClear();
  };

  function _bind_all_eventsLog() {
    var all_eventsLog = helper.eA(".js-evets-log");
    for (var i = 0; i < all_eventsLog.length; i++) {
      all_eventsLog[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        render(this);
      }, false)
    };
  };

  function _bind_all_eventsClear() {
    var all_eventsLog = helper.eA(".js-evets-clear");
    for (var i = 0; i < all_eventsLog.length; i++) {
      all_eventsLog[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        destroy(this);
      }, false)
    };
  };

  function destroy(button) {
    var options = helper.makeObject(button.dataset.eventsOptions);
    var allEvents = helper.getObject({
      object: sheet.get(),
      path: "events.all"
    });
    var foundXp = false;
    var foundWealth = false;
    var newEvents = [];
    var _checkForXp = function() {
      allEvents.forEach(function(object, index) {
        if (object.type == "xp") {
          foundXp = true;
        };
      });
    };
    var _checkForWealth = function() {
      allEvents.forEach(function(object, index) {
        if (object.type == "platinum" || object.type == "gold" || object.type == "silver" || object.type == "copper") {
          foundWealth = true;
        };
      });
    };
    var _destroyXp = function() {
      allEvents.forEach(function(object, index) {
        if (object.type != "xp") {
          newEvents.push(allEvents[index]);
        };
      });
    };
    var _destroyWealth = function() {
      allEvents.forEach(function(object, index) {
        if (object.type != "platinum" && object.type != "gold" && object.type != "silver" && object.type != "copper") {
          newEvents.push(allEvents[index]);
        };
      });
    };
    var _store = function() {
      helper.setObject({
        object: sheet.get(),
        path: "events.all",
        newValue: newEvents
      });
      sheet.store();
    };
    if (options.type == "xp") {
      _checkForXp();
      if (foundXp) {
        prompt.render({
          heading: options.promptHeading,
          message: options.promptMessage,
          actionText: "Clear",
          action: function() {
            _destroyXp();
            _store();
          },
        });
      } else {
        snack.render({
          message: "Nothing to clear."
        });
      };
    } else if (options.type == "wealth") {
      _checkForWealth();
      if (foundWealth) {
        prompt.render({
          heading: options.promptHeading,
          message: options.promptMessage,
          actionText: "Clear",
          action: function() {
            _destroyWealth();
            _store();
          },
        });
      } else {
        snack.render({
          message: "Nothing to clear."
        });
      };
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
    var all_events = helper.getObject({
      object: sheet.get(),
      path: "events.all"
    });
    all_events.unshift(_create_event(type, eventObject));
    sheet.store();
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
          data = data + " EXP";
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

    var _create_modalBody = function() {
      var body = document.createElement("div");
      var all_events = helper.getObject({
        object: sheet.get(),
        path: "events.all"
      });
      var all_eventsToRender = [];
      var _collectAllEvents = function() {
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
      };
      _collectAllEvents();
      // console.log("all_eventsToRender", all_eventsToRender);
      if (all_eventsToRender.length > 0) {
        var table = document.createElement("table");
        var tbody = document.createElement("tbody");
        for (var i in all_eventsToRender) {
          tbody.appendChild(_create_eventTr(all_eventsToRender[i]));
        };
        table.appendChild(tbody);
        return table;
      } else {
        var para = document.createElement("p");
        para.textContent = options.emptyMessage;
        return para;
      };
    };

    var modalBody = _create_modalBody();

    modal.render({
      heading: options.modalHeading,
      content: modalBody,
      actionText: "Close",
      size: "small"
    });
    page.update();
  };

  function undo() {
    var all_events = helper.getObject({
      object: sheet.get(),
      path: "events.all"
    });
    all_events.shift();
  };

  // exposed methods
  return {
    bind: bind,
    render: render,
    store: store,
    undo: undo
  };

})();