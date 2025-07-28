import madLibLibrary from "./data.js";

function getRandom(num) {
  return Math.floor(Math.random() * num);
}

function output(data) {
  const pattern = /{(.*?)}/g;
  const currentStory = data.stories[0].content;
  const library = currentStory.match(pattern);
  const replacementWords = [];

  for (const word of library) {
    switch (word) {
      case "{ADJECTIVE}":
        const newAdjective = data.adjectives[getRandom(data.adjectives.length)];
        replacementWords.push(newAdjective);
        break;

      case "{COLOR}":
        const color = data.colors[getRandom(data.colors.length)];
        replacementWords.push(color);
        break;

      case "{NOUN}":
        const noun = data.nouns[getRandom(data.nouns.length)];
        replacementWords.push(noun);
        break;

      case "{PLURALNOUN}":
        const pNoun = data.pluralNouns[getRandom(data.pluralNouns.length)];
        replacementWords.push(pNoun);
        break;

      case "{SHAPE}":
        const shape = data.shapes[getRandom(data.shapes.length)];
        replacementWords.push(shape);
        break;

      case "{VERBING}":
        const verbing = data.verbing[getRandom(data.verbing.length)];
        replacementWords.push(verbing);
        break;

      case "{EMOTION}":
        const emotion = data.emotions[getRandom(data.emotions.length)];
        replacementWords.push(emotion);
        break;

      case "{VERB}":
        const verb = data.verbs[getRandom(data.verbs.length)];
        replacementWords.push(verb);
        break;

      case "{VERBPASTTENSE}":
        const verbed = data.verbed[getRandom(data.verbed.length)];
        replacementWords.push(verbed);
        break;

      case "{ADVERB}":
        const adverb = data.adverbs[getRandom(data.adverbs.length)];
        replacementWords.push(adverb);
        break;

      case "{NAME}":
        const name = data.names[getRandom(data.names.length)];
        replacementWords.push(name);
        break;

      case "{TERMOFENDEARMENT}":
        const endearment = data.endearments[getRandom(data.endearments.length)];
        replacementWords.push(endearment);
        break;

      default:
        console.log(`Have not yet accounted for ${word} yet`);
        break;
    }
  }

  const storyList = currentStory.split(" ").filter((word) => {
    if (word !== null && word !== undefined && word !== "");
    return word.normalize();
  });

  let count = 0;
  const newStory = storyList.map((storyItem) => {
    if (storyItem.match(pattern)) {
      const test = storyItem.match(pattern)[0];
      return storyItem.replace(test, replacementWords[count++]);
    } else {
      return storyItem;
    }
  });

  return newStory.join(" ");
}

console.log(output(madLibLibrary));
