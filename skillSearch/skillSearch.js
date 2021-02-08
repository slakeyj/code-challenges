function Skill(prereqs, learned) {
  this.prereqs = prereqs;
  this.learned = learned;
}

const skills = {
  flour: new Skill(['start'], true),
  yeast: new Skill(['start'], true),
  dough: new Skill(['flour', 'yeast'], false),
  bread: new Skill(['dough'], false),
};
console.log('skills', skills['bread'].learned)


// function that takes in skills object
// return what skill the students should work on next


function nextStep(skills, goal) {
  const skillStack = [goal];

  while (skillStack.length) {
    const topValue = skillStack[skillStack.length - 1];
    if (!topValue.learned) {
      skillStack = [...skillStack, ...topValue.prereqs]
    }
  }

  // lookup goal learned status
  // if it's false, look at the items in the prereqs array
  // look up their learned status
  //
  // return string 'dough', skill that needs to be worked on next
}

console.log(nextStep(skills, 'bread'));