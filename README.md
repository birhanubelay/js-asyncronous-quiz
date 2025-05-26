# js-asyncronous-quiz
Pseudo-code
1) Create a CustomerOrder class with properties: orderId (string), items (array of objects with name, quantity, price), and status (string). Add a method calculateTotal() that returns the total order amount. Write an async method processPayment() that simulates payment with a Promise that resolves after 2 seconds. After calling the method, change the status to "paid" and print a success message.
Input
   orderId(String), items(array of objects), and status(String)
Process
   step1: Create an object called CustomerOrder with attributes orderId, items, and status
   step2: Create a method calculateTotal().
   step3: Inside the method iterate through the items.
   step4: Multiply the quantity by its price.
   step5: Add all amount.
   step6: Return total amount.
   step7: Create a function called processPayment.
   step8: Return the pament status messages  with a payment status "paid" after two seconds.
Output
   Message about the payment status(String)
   
2) Create a TeamMember class that takes name, role, and an array of tasks (each task is an object with title and completed boolean). Write a prototype method completeTask(taskTitle) that marks a task as completed. Write another method checkProgress() that returns a Promise resolving to "All tasks completed!" or rejecting with "Pending tasks remaining" based on the state of the tasks array.
Input
   name(String),role(String), and tasks(array of objects(title(String) and completed(boolean))
Process
  step1: Create an object called TeamMeber with attributes name, role, and tasks.
  step2: Create a method called completeTask wich takes in taskTitle as a parameter.
  step3: Iterate through the tasks.
  step4: Check if taskTitle is found in tasks.
  step5: If found completed is equals to true and return a message marked as completed.
  step6: Otherwise return  taskTitle not found.
  step7: Create another method called checkProgress
  step8: Create a new promise inside the method.
  step9: Iterate through the tasks
  step10: Check if completed is true in all tasks.
  step11: If all tasks are completed return All tasks are completed, otherwise return there are some tasks remaining after one second.
Output
 messages about tasks status(String)

3) Build a Candidate class with properties: name, position, and interviews (array of objects with date, status). Add a method scheduleInterview(date) that pushes a new interview with status "pending". Then write an async function sendConfirmation() that returns a Promise that resolves after 1 second with a message "Interview confirmed with [name]", and log the message.
Input
  name(String), position(String), Interviews(array of objects with date and status(String)).
Process
   step1: Create an object called Candidate with attributes name, position, and interviews.
   step2: Add an empty array for interviews.
   step4: Create a method called scheduleInterview wich takes in date as a parameter.
   step5: Add interview object with date and status 'pending' to interviews
   step6: Return the message confirming the interview has been scheduled.
   step7: Create a function called sendConfirmation
   step8: Return a message confirming the interview after one second.
Output
  messages about the interview schedule and confirmation(String)

4) Design a Course class with properties: title, instructor, and students (array of student objects with name and progress). Add a method updateProgress(studentName, value) that modifies the student’s progress. Create an async method generateCertificate(studentName) that returns a Promise resolving only if the progress is 100, otherwise reject with "Incomplete progress".
   Input
     
