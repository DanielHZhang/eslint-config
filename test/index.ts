import fs from 'fs';
import type {Server} from 'http';

const badTypeAssertation = {wow: 'cool'} as {wow: string};
type Body = {wow: string};
const goodTypeAssertation: Body = {wow: 'cool'};

type BadIndexedObject = {[key: string]: any};

class Test {
  // array-type
  public badArray: string[] = ['string'];
  public goodArray: string[] = ['string'];

  // consistent-indexed-object-style
  public badIndexedObject: {[key: string]: any} = {someObject: 'cool'};
  public goodIndexedObject: Record<string, any> = {someObject: 'cool'};

  public someFn() {
    const wow = '';
  }
}
