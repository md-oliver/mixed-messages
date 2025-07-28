import madLibLibrary from "./data.js";

// Method for generating a random number, which returns a number
// up to the argument num given
function getRandom(num) {
  return Math.floor(Math.random() * num);
}

// Main console application functionality
// Iterates through the data given and outputs a word library for each filler word required
function output(data, storyNum) {
  // Regular expression to find the pattern in the story
  const pattern = /{(.*?)}/g;
  const storyNames = data.stories.map((story) => story.name);
  if (
    storyNum &&
    typeof storyNum === "number" &&
    storyNum > 0 &&
    storyNum <= data.stories.length
  ) {
    const currentStory = data.stories[storyNum - 1].content;
    const library = currentStory.match(pattern);
    const replacementWords = [];

    // Iterates through the data given
    for (const word of library) {
      // Switch iterates over the given cases to determin which filler text to output, which is then
      // pushed to a new array for later calculations
      switch (word) {
        case "{ADJECTIVE}": // Adjective ouput
          const newAdjective =
            data.adjectives[getRandom(data.adjectives.length)];
          replacementWords.push(newAdjective);
          break;

        case "{COLOR}": // Color ouput
          const color = data.colors[getRandom(data.colors.length)];
          replacementWords.push(color);
          break;

        case "{NOUN}": // Noun
          const noun = data.nouns[getRandom(data.nouns.length)];
          replacementWords.push(noun);
          break;

        case "{PLURALNOUN}": // Plural noun output
          const pNoun = data.pluralNouns[getRandom(data.pluralNouns.length)];
          replacementWords.push(pNoun);
          break;

        case "{SHAPE}": // Shape output
          const shape = data.shapes[getRandom(data.shapes.length)];
          replacementWords.push(shape);
          break;

        case "{VERBING}": // Verb, ending in -ing output
          const verbing = data.verbing[getRandom(data.verbing.length)];
          replacementWords.push(verbing);
          break;

        case "{EMOTION}": // Feelings, emotions output
          const emotion = data.emotions[getRandom(data.emotions.length)];
          replacementWords.push(emotion);
          break;

        case "{VERB}": // Verb output
          const verb = data.verbs[getRandom(data.verbs.length)];
          replacementWords.push(verb);
          break;

        case "{VERBPASTTENSE}": // Verb, past tense output
          const verbed = data.verbed[getRandom(data.verbed.length)];
          replacementWords.push(verbed);
          break;

        case "{ADVERB}": // Adverb output
          const adverb = data.adverbs[getRandom(data.adverbs.length)];
          replacementWords.push(adverb);
          break;

        case "{NAME}": // Name output
          const name = data.names[getRandom(data.names.length)];
          replacementWords.push(name);
          break;

        case "{TERMOFENDEARMENT}": // Endearing term output
          const endearment =
            data.endearments[getRandom(data.endearments.length)];
          replacementWords.push(endearment);
          break;

        default: // If there is a term missing, it logs to the console for investigating
          console.log(`Have not yet accounted for ${word} yet`);
          break;
      }
    }

    // Splitting the story into an array, and filtering any formatting problems, or null values.
    const storyList = currentStory.split(" ").filter((word) => {
      if (word !== null && word !== undefined && word !== "");
      return word.normalize();
    });

    let count = 0;
    // Iterating through the story array to generated the new story with the filler text
    // generated above.
    const newStory = storyList.map((storyItem) => {
      if (storyItem.match(pattern)) {
        const match = storyItem.match(pattern)[0];
        // Add the filler text in their appropriate places
        return storyItem.replace(match, replacementWords[count++]);
      } else {
        // Return the rest of the story that's also not the filler text
        return storyItem;
      }
    });
    // Output result
    console.log(newStory.join(" "));
  } else {
    // Choose the story number, printing out the names of the story
    console.log(`Please choose a story, from 1 - ${data.stories.length}`);
    for (let story of storyNames) {
      console.log("-", story);
    }
  }
}

// Output the story, currently only 2 stories, 2nd story is output.
output(madLibLibrary, 2);
