const PubSub = require('./pubsub');

// Define subscribers
const emailService = (data) => {
  console.log(`[Email Service] Sending email: ${data.subject} to ${data.to}`);
};

const loggingService = (data) => {
  console.log(`[Logging Service] Log: Event '${data.event}' occurred with payload:`, data);
};

const analyticsService = (data) => {
  console.log(`[Analytics Service] Tracking event: ${data.event}`);
};

// Setup PubSub system
const pubsub = new PubSub();

// Subscribe to event
pubsub.subscribe('user_signup', emailService);
pubsub.subscribe('user_signup', loggingService);
pubsub.subscribe('user_signup', analyticsService);

// Publish event
pubsub.publish('user_signup', {
  event: 'user_signup',
  to: 'user@example.com',
  subject: 'Welcome!',
  userId: 1234,
});

// Unsubscribe analytics service
pubsub.unsubscribe('user_signup', analyticsService);

// Publish again after unsubscribe
pubsub.publish('user_signup', {
  event: 'user_signup',
  to: 'seconduser@example.com',
  subject: 'Thanks for signing up!',
  userId: 5678,
});
