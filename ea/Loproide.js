// Assuming RequestStore is a class that handles resource requests
class RequestStore {
  constructor() {
    this.store = [];
  }

  addRequest(request) {
    this.store.push(request);
  }

  getRequest(index) {
    return this.store[index];
  }

  // Add more methods as needed
}

// Initialize a new instance of RequestStore
const resourceRequestStore = new RequestStore();

// Example usage
resourceRequestStore.addRequest({ url: 'https://www.example.com method: 'GET' });
const firstRequest = resourceRequestStore.getRequest(0);
console.log(firstRequest);
