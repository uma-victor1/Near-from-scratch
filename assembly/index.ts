import {Context, storage, logging } from "near-sdk-as";

// --- contract code goes below

/*
 * This is an example of an assembly smart contract on NEAR using the singleton method
 *
 * 1. setGreeting: accepts a greeting, such as "howdy", and records it for the
 *    user (account_id) who sent the request
 * 2. getGreeting: accepts an account_id and returns the greeting saved for it,
 *    defaulting to "Hello"
 *
 * Learn more about writing NEAR smart contracts with AssemblyScript:
 * https://docs.near.org/docs/develop/contracts/as/intro
 *
 */

@nearBindgen
export class Greeting {
  private DEFAULT_MESSAGE: string = "hello world"

 getGreeting(accountId: string): string | null {
    // This uses raw `storage.get`, a low-level way to interact with on-chain
    // storage for simple contracts.
    // If you have something more complex, check out persistent collections:
    // https://docs.near.org/docs/concepts/data-storage#assemblyscript-collection-types
    return storage.get<string>(accountId, this.DEFAULT_MESSAGE)
  }

  setGreeting(message: string): void {
    const accountId = Context.sender
    // Use logging.log to record logs permanently to the blockchain!
    logging.log(`Saving greeting "${message}" for account "${accountId}"`)
    storage.set(accountId, message)
  }
}
