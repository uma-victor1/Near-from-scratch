/*
 *import the Greeting class we created in our index.ts file
 */
import { Greeting } from '..'
import { storage, Context } from 'near-sdk-as'

let greeting: Greeting

describe('Greeting ', () => {
  it('should be set and read', () => {
    greeting.setGreeting('hello world')
  })
})
