import { Haiku } from './../src/haiku.js';
describe('Haiku', function(){

  it('should check if the string is a string', function(){
    let haiku = new Haiku("hello");
    expect(haiku.str).toEqual("hello");
  });

  it('should check if the string is three lines', function(){
    let haiku = new Haiku("the dog walked to the park \n he likes to run \n he ate food \n he went to bed");
    expect(haiku.checkLines()).not.toEqual("not a haiku");
  })

  it('check the number of vowels in each line', function(){
    let haiku = new Haiku("the dog walked to the park \n he likes to run \n he ate food");
    haiku.checkLines();
    expect(haiku.checkVowels(haiku.line1)).toEqual(7);
  })
});
