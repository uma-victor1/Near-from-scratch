import {
 Counter
} from '..';

import { context, storage, VMContext } from 'near-sdk-as';
let counter: Counter

describe("Counter ", () => {

  beforeAll(()=>{
    counter = new Counter()
  });

  it("should increment by one", () => {
      counter.incrementCounter(1);
      expect(counter.getCounter()).toBe(1, "counter should be one after a single increment.");
  });

  it("getCounter is the same as reading from storage", () => {
      expect(storage.getPrimitive<i32>("counter", 0)).toBe(counter.getCounter(), "storage.getPrimitive<i32>(\"counter\", 0) = getCounter()");
  });

  it("should decrement by one", () => {
      counter.incrementCounter(1);
      counter.decrementCounter(1);
      expect(counter.getCounter()).toBe(0, "counter should be zero after a single decrement.");
  });

  it("should be resetable", () => {
     counter.incrementCounter(1);
      counter.incrementCounter(1);
      counter.resetCounter(); // reset to zero
      expect(counter.getCounter()).toBe(0, "counter should be zero after it is reset."); 
  });
  
  it("should increment multiple times and decrement back to zero", () => {
      counter.incrementCounter(1);
      expect(counter.getCounter()).toBe(1, "0 + 1 = 1");
      counter.incrementCounter(3);
      expect(counter.getCounter()).toBe(4, "1 + 3 = 4");
      counter.decrementCounter(4);
      expect(counter.getCounter()).toBe(0, "4 - 4 = 0");
  });

  it("should be eve's account", () => {
    VMContext.setCurrent_account_id("eve")
      expect(context.contractName).toBe("eve");
  });
});
