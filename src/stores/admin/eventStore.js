import { defineStore } from 'pinia';

export const useEventStore = defineStore('adminEvents', {
  state: () => ({
    events: [],
  }),
  actions: {
    addEvent(event) {
      this.events.push(event);
    },
    removeEvent(eventId) {
      const index = this.events.findIndex(e => e.id === eventId);
      if (index !== -1) {
        this.events.splice(index, 1);
      }
    },
    updateEvent(updatedEvent) {
      const index = this.events.findIndex(e => e.id === updatedEvent.id);
      if (index !== -1) {
        this.events[index] = updatedEvent;
      }
    },
    setEvents(events) {
      this.events = events;
    },
  },
  getters: {
    getEventById: (state) => (id) => {
      return state.events.find(event => event.id === id);
    },
    getUpcomingEvents: (state) => {
      const now = new Date();
      return state.events.filter(event => new Date(event.date) > now);
    },
  },
});
