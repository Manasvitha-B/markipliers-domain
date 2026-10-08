import { describe,it,expect } from 'vitest';
import { submissionSchema } from './submission';
const valid={name:'Alex',email:'alex@example.com',favorite:'In Space With Markiplier',message:'Hello from the fan club!'};
describe('Fan submission validation',()=>{
 it('requires name, email, favorite video and message',()=>{for(const field of Object.keys(valid)){expect(submissionSchema.safeParse({...valid,[field]:''}).success).toBe(false);}});
 it('rejects invalid emails',()=>{expect(submissionSchema.safeParse({...valid,email:'not-an-email'}).success).toBe(false);});
 it('accepts a complete valid submission',()=>{expect(submissionSchema.safeParse(valid).success).toBe(true);});
});
