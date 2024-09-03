import Employee from "./Employee";

class ZooWorker extends Employee {
  constructor(name: string, id: number, title: string, salary: number) {
    super(name, id, title, salary);
  }
}