function generateMadlib() {
  
  // This is the starting story
  var story = "Welcome to ScriptEd! Our mascot is the PLURAL_NOUN.  We love to VERB! This is NAME's project. PRONOUN has been working very hard.";
  

  var inputValue = document.getElementById("plural-noun-1").value;
  story = story.replace("PLURAL_NOUN", inputValue);
  
  inputValue = document.getElementById("verb").value;
  story = story.replace("VERB", inputValue);

  inputValue = document.getElementById("name").value;
  story = story.replace("NAME", inputValue);

  inputValue = document.getElementById("pronoun").value;
  story = story.replace("PRONOUN", inputValue);
  
  // This writes the story when the user clicks the "Generate MadLib" button"
  document.getElementById("result").innerHTML = story;

  // document.write(story);
}

// when the button is clicked, print the story
$("btn btn-success btn-lg").click(function() {
	finalStory = generateMadlib();
    document.write(finalStory);
});