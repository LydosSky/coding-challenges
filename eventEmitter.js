class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   * */
  subscribe(eventName, callback) {
    let index = Object.keys(this.events).length;
    if (this.events[eventName] === undefined)
      this.events[eventName] = [
        {
          index,
          callback,
        },
      ];
    else
      this.events[eventName].push({
        index,
        callback,
      });
    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(
          (cb) => cb.index !== index,
        );
      },
    };
  }

  /**
   *
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   * */
  emit(eventName, args = []) {
    const emittedEvents = [];
    if (this.events[eventName] !== undefined)
      this.events[eventName].map((e) =>
        emittedEvents.push(e.callback(...args)),
      );
    return emittedEvents;
  }
}
