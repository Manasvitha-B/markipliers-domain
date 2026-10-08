import {describe,expect,it} from 'vitest';
import {messageInitial,sampleMessages} from './messages';

describe('Community message placeholders',()=>{
 it('shows six example messages with every card field filled in',()=>{
  expect(sampleMessages).toHaveLength(6);
  for(const message of sampleMessages){
   expect(message.id.trim().length).toBeGreaterThan(0);
   expect(message.name.trim().length).toBeGreaterThan(0);
   expect(message.favorite.trim().length).toBeGreaterThan(0);
   expect(message.message.trim().length).toBeGreaterThan(0);
   expect(message.display.trim().length).toBeGreaterThan(0);
   expect(Date.parse(message.date)).not.toBeNaN();
  }
  expect(new Set(sampleMessages.map(message=>message.id)).size).toBe(6);
 });
 it('keeps the fan examples the club asked for',()=>{
  expect(sampleMessages.find(message=>message.name==='Alex')).toMatchObject({favorite:'Who Killed Markiplier',message:'Been watching Mark for years. Absolute legend.'});
  expect(sampleMessages.find(message=>message.name==='Sarah')?.favorite).toBe('Five Nights at Freddy’s');
 });
 it('uses the fan name initial for the card badge',()=>{
  expect(messageInitial('alex')).toBe('A');
  expect(messageInitial('  devan')).toBe('D');
 });
});
