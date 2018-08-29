'use strict';

const AnimalShelter = require('./fifo_animal_shelter');

describe('animal shelter', ()=>{
  it('creates a queue of animals in an animal shelter', ()=>{
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');
    expect(shelter.head.animal).toBe('dog');
    shelter.enqueue('cat');
    expect(shelter.head.animal).toBe('cat');
    expect(shelter.tail.animal).toBe('dog');
    shelter.enqueue('ostrich');
    expect(shelter.head.animal).toBe('ostrich');
  });
  it('removes an animal from the queue on a first-in first-out basis', ()=>{
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');
    expect(shelter.head.animal).toBe('dog');
    shelter.enqueue('cat');
    expect(shelter.head.animal).toBe('cat');
    expect(shelter.tail.animal).toBe('dog');
    shelter.enqueue('ostrich');
    expect(shelter.head.animal).toBe('ostrich');
    expect(shelter.dequeue()).toBe('dog');
    expect(shelter.tail.animal).toBe('cat');
  });
  it('finds and removes specific animals from the queue when given a value', ()=>{
    let shelter = new AnimalShelter();
    expect(shelter.dequeue('cat')).toBe('This queue is empty.');
    shelter.enqueue('dog');
    expect(shelter.head.animal).toBe('dog');
    shelter.enqueue('cat');
    expect(shelter.head.animal).toBe('cat');
    expect(shelter.tail.animal).toBe('dog');
    shelter.enqueue('ostrich');
    expect(shelter.head.animal).toBe('ostrich');
    expect(shelter.dequeue('ostrich')).toBe('ostrich');
    expect(shelter.head.animal).toBe('cat');
    expect(shelter.dequeue('dog')).toBe('dog');
    expect(shelter.tail.animal).toBe('cat');
    shelter.enqueue('dog');
    shelter.enqueue('ostrich');
    shelter.dequeue('dog');
    expect(shelter.head.animal).toBe('ostrich');
    expect(shelter.head.next.animal).toBe('cat');
    expect(shelter.dequeue('dog')).toBe('Could not find a "dog" in the shelter.');
  });
});