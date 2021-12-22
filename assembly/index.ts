import { storage, logging } from "near-sdk-as";

// --- contract code goes below

@nearBindgen
export class Counter {
  private counter: i32 = 0

  incrementCounter(value: i32) :void {
    this.counter += value
    logging.log("Counter is now: " + this.counter.toString());
  }

  decrementCounter(value: i32) :void {
    this.counter -= value
  }

  getCounter(): i32 {
   return this.counter
  }

  resetCounter(): void {
    this.counter = 0
  }
  
}
