class PubSub {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, handler) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(handler);
    console.log(`Subscribed to event: '${event}'`);
  }

  unsubscribe(event, handler) {
    if (!this.subscribers[event]) return;

    this.subscribers[event] = this.subscribers[event].filter(h => h !== handler);
    console.log(`Unsubscribed from event: '${event}'`);
  }

  publish(event, data) {
    console.log(`Publishing event: '${event}' with data:`, data);
    if (!this.subscribers[event]) return;

    this.subscribers[event].forEach(handler => handler(data));
  }
}

module.exports = PubSub;
