//1 Customer Order problem
class CustomerOrder {
  constructor(orderId, items, status = "pending") {
    this.orderId = orderId; 
    this.items = items; 
    this.status = status; 
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };
  async processPayment() {
    console.log(`Processing payment for Order ${this.orderId}...`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    this.status = "paid";
    console.log(
      `Paiment recieved for ${this.orderId}! Status: ${this.status}`
    );
  };
};
const userOrder = new CustomerOrder("order12B3", [
  { name: "Mobile phone", quantity: 15, price: 200000 },
  { name: "Laptop", quantity: 5, price: 430000 },
]);

console.log("Total:", userOrder.calculateTotal()); 
userOrder.processPayment();


//2 Team Member Tasks
class TeamMember {
  constructor(name, role, tasks) {
    this.name = name;
    this.role = role;
    this.tasks = tasks;
  };
};
TeamMember.prototype.completeTask = function(taskTitle) {
  const task = this.tasks.find(taskT => taskT.title === taskTitle);
  if (task) {
    task.completed = true;
    console.log(`${taskTitle} marked as completed`);
  } else {
    console.log(`${taskTitle} not found.`);
  };
};
TeamMember.prototype.checkProgress = function() {
  return new Promise((resolve, reject) => {
    const allCompleted = this.tasks.every(t => t.completed);
    setTimeout(() => {
      if (allCompleted) {
        resolve("All tasks are completed!");
      } else {
        reject("There are some tasks remaining.");
      }
    }, 1000);
  });
};
const member = new TeamMember("Selam", "software developer", [
  { title: "Design wire frame", completed: false },
  { title: "Build Green kiosk user flow", completed: false }
]);
member.completeTask("Design wire frame");
member.checkProgress()
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
member.completeTask("Write tests");
member.checkProgress()
  .then(msg => console.log(msg))
  .catch(err => console.log(err));


//3 Candidacy
class Candidate {
  constructor(name, position, interviews=[]) {
    this.name = name;
    this.position = position;
    this.interviews = interviews;
  };
  scheduleInterview(date) {
    this.interviews.push({ date, status: "pending" });
    console.log(`Interview scheduled on ${date} for ${this.name}`);
  };
  async sendConfirmation() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const message = `Interview confirmed with ${this.name}`;
        console.log(message);
        resolve(message);
      }, 1000);
    });
  };
};
const newCandidate = new Candidate("Birhane Selomon", "Data Analyst");
newCandidate.scheduleInterview("2025-06-05");
newCandidate.sendConfirmation();
//4
class Course {
  constructor(title, instructor, students = []) {
    this.title = title;
    this.instructor = instructor;
    this.students = students; 
  }

  updateProgress(studentName, value) {
    const student = this.students.find(s => s.name === studentName);
    if (student) {
      student.progress = value;
      console.log(`Updated progress for ${studentName} to ${value}`);
    } else {
      console.log(`Student ${studentName} not found.`);
    }
  }

  async generateCertificate(studentName) {
    const student = this.students.find(s => s.name === studentName);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (student && student.progress === 100) {
          const message = `Certificate generated for ${studentName}`;
          console.log(message);
          resolve(message);
        } else {
          reject("Incomplete progress");
        }
      }, 500);
    });
  };
};
const course = new Course("JavaScript 101", "Dr. Smith", [
  { name: "Selam", progress: 90 },
  { name: "Bisrat", progress: 100 }
]);

course.updateProgress("Selam", 100);

course.generateCertificate("Selam")
  .then(message => console.log(message))
  .catch(error => console.log(error));

course.generateCertificate("Bob")
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

//5
class StockTracker {
  constructor(watchlist = []) {
    this.watchlist = watchlist; 
  };
  updatePrice(symbol, newPrice) {
    const stock = this.watchlist.find(s => s.symbol === symbol);
    if (stock) {
      stock.currentPrice = newPrice;
      console.log(`Updated ${symbol} price to ${newPrice}`);
    } else {
      console.log(`Stock ${symbol} not found in watchlist.`);
    }
  };
  async checkAlerts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const triggered = this.watchlist.filter(
          stock => stock.currentPrice >= stock.threshold
        );
        if (triggered.length > 0) {
          resolve(triggered);
        } else {
          reject("No alerts triggered");
        }
      }, 500); 
    });
  };
};
const tracker = new StockTracker([
  { symbol: "ACD", threshold: 190, currentPrice: 185 },
  { symbol: "BGT", threshold: 700, currentPrice: 720 },
  { symbol: "GOOG", threshold: 3000, currentPrice: 2990 }
]);
tracker.updatePrice("ACD", 195);
tracker.checkAlerts()
  .then(alerts => {
    console.log("Alerts triggered for:", alerts.map(s => s.symbol).join(", "));
  })
  .catch(msg => {
    console.log(msg);
  });