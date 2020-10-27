
define_ibex_controller({
      name: "MyPractice",

	  jqueryWidget: {
	      _init: function () {
		        this.options.transfer = null;
		        this.element.VBox({
			          options: this.options,
			          triggers: [1],
			          padding: "1em",
			          children: [
				            "Message", this.options,
      				      "AcceptabilityJudgment", this.options
                ]
                  });
          }
      },

      properties: { }
});
var exp = seq("practice", "startexp", sepWith("sep", seq(rshuffle(startsWith("target"), anyOf(startsWith("filler"), startsWith("control"))))));
var shuffleSequence = seq("intro","instructions", exp, "sr", "end");
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence.",
        ignoreFailure: true
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5"],
        q: "How does the sentence sound?",
        leftComment: "(unnatural)", rightComment: "(natural)",
        presentAsScale: true
    },
    "Message", {
        hideProgressBar: true
    },

    "Question", {
        hasCorrect: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var manualSendResults = true;

var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    ["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],


    ["intro", "Form", {html: { include: "intro.html" }}],
    ["instructions", "Message", {html: { include: "instructions.html" }}],
    ["startexp", "Message", {html: "This is the end of the practice session. The experiment begins now."}],
    ["end", "Message", {html: { include: "end.html" }, transfer: null}],

    ["practice", "MyPractice", {html: "<div style=\"text-align: center;font-style: italic;\">Indicate on the scale below how natural the sentence sounds for you.</div>", s: "Ms Burnham has been a registered nurse for nine years."},
     "Message", {html: "Some sentences will be clearly worse than others."}],


    ["practice", "MyPractice", {html: "<div style=\"text-align: center;font-style: italic;\">Indicate on the scale below how natural the sentence sounds for you.</div>", s: "Malamutes is beautiful dogs."}],




[["target-1-too-00", 1], "AcceptabilityJudgment", {s: "The cook is a dancer and the waiter dances too, I have been told recently."}],
[["target-1-nil-00", 1], "AcceptabilityJudgment", {s: "The cook is a swimmer and the waiter dances often, I have been told recently."}],
[["target-1-too-04", 1], "AcceptabilityJudgment", {s: "The cook is a dancer and the waiter, who is a boxer, dances too, I have been told recently."}],
[["target-1-nil-04", 1], "AcceptabilityJudgment", {s: "The cook is a swimmer and the waiter, who is a boxer, dances often, I have been told recently."}],
[["target-1-too-08", 1], "AcceptabilityJudgment", {s: "The cook is a dancer and the waiter, who is a great boxer from southern Amsterdam, dances too, I have been told recently."}],
[["target-1-nil-08", 1], "AcceptabilityJudgment", {s: "The cook is a swimmer and the waiter, who is a great boxer from southern Amsterdam, dances often, I have been told recently."}],
[["target-1-too-12", 1], "AcceptabilityJudgment", {s: "The cook is a dancer and the waiter, who is a great lightweight boxer from east parts of southern Amsterdam, dances too, I have been told recently."}],
[["target-1-nil-12", 1], "AcceptabilityJudgment", {s: "The cook is a swimmer and the waiter, who is a great lightweight boxer from east parts of southern Amsterdam, dances often, I have been told recently."}],

[["target-2-too-00", 2], "AcceptabilityJudgment", {s: "The librarian is a painter and the history teacher paints too, according to my sister."}],
[["target-2-nil-00", 2], "AcceptabilityJudgment", {s: "The librarian is a reader and the history teacher paints frequently, according to my sister."}],
[["target-2-too-04", 2], "AcceptabilityJudgment", {s: "The librarian is a painter and the history teacher, who presides over an association, paints too, according to my sister."}],
[["target-2-nil-04", 2], "AcceptabilityJudgment", {s: "The librarian is a reader and the history teacher, who presides over an association, paints frequently, according to my sister."}],
[["target-2-too-08", 2], "AcceptabilityJudgment", {s: "The librarian is a painter and the history teacher, who presides over the association of state classroom teachers, paints too, according to my sister."}],
[["target-2-nil-08", 2], "AcceptabilityJudgment", {s: "The librarian is a reader and the history teacher, who presides over the association of state classroom teachers, paints frequently, according to my sister."}],
[["target-2-too-12", 2], "AcceptabilityJudgment", {s: "The librarian is a painter and the history teacher, who presides over the association of state classroom teachers and school personnel, paints too, according to my sister."}],
[["target-2-nil-12", 2], "AcceptabilityJudgment", {s: "The librarian is a reader and the history teacher, who presides over the association of state classroom teachers and school personnel, paints frequently, according to my sister."}],

[["target-3-too-00", 3], "AcceptabilityJudgment", {s: "The bakery has shut down and the cafe is closed too, so the streets are empty."}],
[["target-3-nil-00", 3], "AcceptabilityJudgment", {s: "The bakery is dull and the cafe is closed down, so the streets are empty."}],
[["target-3-too-04", 3], "AcceptabilityJudgment", {s: "The bakery has shut down and the cafe, which was built nearby, is closed too, but the streets are empty."}],
[["target-3-nil-04", 3], "AcceptabilityJudgment", {s: "The bakery is dull and the cafe, which was built nearby, is closed down, so the streets are empty."}],
[["target-3-too-08", 3], "AcceptabilityJudgment", {s: "The bakery has shut down and the cafe, which was built near the beautiful old library, is closed too, so the streets are empty."}],
[["target-3-nil-08", 3], "AcceptabilityJudgment", {s: "The bakery is dull and the cafe, which was built near the beautiful old library, is closed down, so the streets are empty."}],
[["target-3-too-12", 3], "AcceptabilityJudgment", {s: "The bakery has shut down and the cafe, which was built near the beautiful old library with small green windows, is closed too, so the streets are empty."}],
[["target-3-nil-12", 3], "AcceptabilityJudgment", {s: "The bakery is dull and the cafe, which was built near the beautiful old library with small green windows, is closed down, so the streets are empty."}],

[["target-4-too-00", 4], "AcceptabilityJudgment", {s: "The cat has eaten and the dog had his food too, so everything is fine."}],
[["target-4-nil-00", 4], "AcceptabilityJudgment", {s: "The cat has slept and the dog had his food earlier, so everything is fine."}],
[["target-4-too-04", 4], "AcceptabilityJudgment", {s: "The cat has eaten and the dog, which was nervous today, had his food too, so everything is fine."}],
[["target-4-nil-04", 4], "AcceptabilityJudgment", {s: "The cat has slept and the dog, which was nervous today, had his food earlier, so everything is fine."}],
[["target-4-too-08", 4], "AcceptabilityJudgment", {s: "The cat has eaten and the dog, which was nervous today because of the fireworks, had his food too, so everything is fine."}],
[["target-4-nil-08", 4], "AcceptabilityJudgment", {s: "The cat has slept and the dog, which was nervous today because of the fireworks, had his food earlier, so everything is fine."}],
[["target-4-too-12", 4], "AcceptabilityJudgment", {s: "The cat has eaten and the dog, which was very nervous today because of the amount of loud fireworks, had his food too, so everything is fine."}],
[["target-4-nil-12", 4], "AcceptabilityJudgment", {s: "The cat has slept and the dog, which was very nervous today because of the amount of loud fireworks, had his food earlier, so everything is fine."}],

[["target-5-too-00", 5], "AcceptabilityJudgment", {s: "Falcons are predators and eagles hunt prey too, as claimed by our teacher."}],
[["target-5-nil-00", 5], "AcceptabilityJudgment", {s: "Geese are herbivores and eagles hunt prey often, as claimed by our teacher."}],
[["target-5-too-04", 5], "AcceptabilityJudgment", {s: "Falcons are predators and eagles, which are majestic birds, hunt prey too, as claimed by our teacher."}],
[["target-5-nil-04", 5], "AcceptabilityJudgment", {s: "Geese are herbivores and eagles, which are majestic birds, hunt prey often, as claimed by our teacher."}],
[["target-5-too-08", 5], "AcceptabilityJudgment", {s: "Falcons are predators and eagles, which are majestic powerful birds with heavy heads, hunt prey too, as claimed by our teacher."}],
[["target-5-nil-08", 5], "AcceptabilityJudgment", {s: "Geese are herbivores and eagles, which are majestic powerful birds with heavy heads, hunt prey often, as claimed by our teacher."}],
[["target-5-too-12", 5], "AcceptabilityJudgment", {s: "Falcons are predators and eagles, which are majestic powerful birds with heavy heads rarely seen in the wild, hunt prey too, as claimed by our teacher."}],
[["target-5-nil-12", 5], "AcceptabilityJudgment", {s: "Geese are herbivores and eagles, which are majestic powerful birds with heavy heads rarely seen in the wild, hunt prey often, as claimed by our teacher."}],

[["target-6-too-00", 6], "AcceptabilityJudgment", {s: "The frog on the left secretes poison through its skin and the frog on the right is poisonous too, according to the guide."}],
[["target-6-nil-00", 6], "AcceptabilityJudgment", {s: "The frog on the left is a common frog and the frog on the right is poisonous enough, according to the guide."}],
[["target-6-too-04", 6], "AcceptabilityJudgment", {s: "The frog on the left secretes poison through its skin and the frog on the right, which looks rather harmless, is poisonous too, according to the guide."}],
[["target-6-nil-04", 6], "AcceptabilityJudgment", {s: "The frog on the left is a common frog and the frog on the right, which looks rather harmless, is poisonous enough, according to the guide."}],
[["target-6-too-08", 6], "AcceptabilityJudgment", {s: "The frog on the left secretes poison through its skin and the frog on the right, whose small size makes it look rather harmless, is poisonous too, according to the guide."}],
[["target-6-nil-08", 6], "AcceptabilityJudgment", {s: "The frog on the left is a common frog and the frog on the right, whose small size makes it look rather harmless, is poisonous enough, according to the guide."}],
[["target-6-too-12", 6], "AcceptabilityJudgment", {s: "The frog on the left secretes poison through its skin and the frog on the right, whose small size and green light skin makes it look rather harmless, is poisonous too, according to the guide."}],
[["target-6-nil-12", 6], "AcceptabilityJudgment", {s: "The frog on the left is a common frog and the frog on the right, whose small size and green light skin makes it look rather harmless, is poisonous enough, according to the guide."}],

[["target-7-too-00", 7], "AcceptabilityJudgment", {s: "The leopard is a night hunter and the Canada lynx hunts at night too, as stated by Wikipedia."}],
[["target-7-nil-00", 7], "AcceptabilityJudgment", {s: "The Moose feeds during the daytime and the Canada lynx hunts at night relentlessly, as stated by Wikipedia."}],
[["target-7-too-04", 7], "AcceptabilityJudgment", {s: "The leopard is a night hunter and the Canada lynx, which is quite peaceful, hunts at night too, as stated by Wikipedia."}],
[["target-7-nil-04", 7], "AcceptabilityJudgment", {s: "The Moose feeds in the daytime and the Canada lynx, which is quite peaceful, hunts at night relentlessly, as stated by Wikipedia."}],
[["target-7-too-08", 7], "AcceptabilityJudgment", {s: "The leopard is a night hunter and the Canada lynx, which is quite peaceful for a wild cat, hunts at night too, as stated by Wikipedia."}],
[["target-7-nil-08", 7], "AcceptabilityJudgment", {s: "The Moose feeds in the daytime and the Canada lynx, which is quite peaceful for a wild cat, hunts at night relentlessly, as stated by Wikipedia."}],
[["target-7-too-12", 7], "AcceptabilityJudgment", {s: "The leopard is a night hunter and the Canada lynx, which is quite a peaceful animal for a wild cat living in cold areas, hunts at night too, as stated by Wikipedia."}],
[["target-7-nil-12", 7], "AcceptabilityJudgment", {s: "The Moose feeds in the daytime and the Canada lynx, which is quite a peaceful animal for a wild cat living in cold areas, hunts at night relentlessly, as stated by Wikipedia."}],

[["target-8-too-00", 8], "AcceptabilityJudgment", {s: "The Saber-tooth cat is extinct and the Shrub-ox has died out too, according to the ecologists."}],
[["target-8-nil-00", 8], "AcceptabilityJudgment", {s: "The Guam Kingfisher is nearly extinct and the Shrub-ox has died out fully, according to the ecologists."}],
[["target-8-too-04", 8], "AcceptabilityJudgment", {s: "The Saber-tooth cat is extinct and the Shrub-ox, which was massively built, has died out too, according to the ecologists."}],
[["target-8-nil-04", 8], "AcceptabilityJudgment", {s: "The Guam Kingfisher is nearly extinct and the Shrub-ox, which was massively built, has died out fully, according to the ecologists."}],
[["target-8-too-08", 8], "AcceptabilityJudgment", {s: "The Saber-tooth cat is extinct and the Shrub-ox, which was a massively built mostly shrub-eating animal, has died out too, according to the ecologists."}],
[["target-8-nil-08", 8], "AcceptabilityJudgment", {s: "The Guam Kingfisher is nearly extinct and the Shrub-ox, which was a massively built mostly shrub-eating animal, has died out fully, according to the ecologists."}],
[["target-8-too-12", 8], "AcceptabilityJudgment", {s: "The Saber-tooth cat is extinct and the Shrub-ox, which was a massively built mostly shrub-eating animal living in North America, has died out too, according to the ecologists."}],
[["target-8-nil-12", 8], "AcceptabilityJudgment", {s: "The Guam Kingfisher is nearly extinct and the Shrub-ox, which was a massively built mostly shrub-eating animal living in North America, has died out fully, according to the ecologists."}],

[["target-9-too-00", 9], "AcceptabilityJudgment", {s: "Bear Stearns was acquired by JPMorgan and Merrill-Lynch had to be bought out too, the BBC reported yesterday."}],
[["target-9-nil-00", 9], "AcceptabilityJudgment", {s: "Lehman Brothers went bankrupt and Merrill-Lynch had to be bought out urgently, the BBC reported yesterday."}],
[["target-9-too-04", 9], "AcceptabilityJudgment", {s: "Bear Stearns was acquired by JPMorgan and Merrill-Lynch, which was founded in 1914, had to be bought out too, the BBC reported yesterday."}],
[["target-9-nil-04", 9], "AcceptabilityJudgment", {s: "Lehman Brothers went bankrupt and Merrill-Lynch, which was founded in 1914, had to be bought out urgently, the BBC reported yesterday."}],
[["target-9-too-08", 9], "AcceptabilityJudgment", {s: "Bear Stearns was acquired by JPMorgan and Merrill-Lynch, which was founded in 1914 by Charles Edward Merrill, had to be bought out too, the BBC reported yesterday."}],
[["target-9-nil-08", 9], "AcceptabilityJudgment", {s: "Lehman Brothers went bankrupt and Merrill-Lynch, which was founded in 1914 by Charles Edward Merrill, had to be bought out urgently, the BBC reported yesterday."}],
[["target-9-too-12", 9], "AcceptabilityJudgment", {s: "Bear Stearns was acquired by JPMorgan and Merrill-Lynch, which was founded in 1914 by Charles Edward Merrill and survived many crises, had to be bought out too, the BBC reported yesterday."}],
[["target-9-nil-12", 9], "AcceptabilityJudgment", {s: "Lehman Brothers went bankrupt and Merrill-Lynch, which was founded in 1914 by Charles Edward Merrill and survived many crises, had to be bought out urgently, the BBC reported yesterday."}],

[["target-10-too-00", 10], "AcceptabilityJudgment", {s: "Giraffes are herbivores and zebras eat plants too, as can be seen on animal shows."}],
[["target-10-nil-00", 10], "AcceptabilityJudgment", {s: "Lions are carnivores and zebras eat plants often, as can be seen on animal shows."}],
[["target-10-too-04", 10], "AcceptabilityJudgment", {s: "Giraffes are herbivores and zebras, which have black-and-white coats, eat plants too, as can be seen on animal shows."}],
[["target-10-nil-04", 10], "AcceptabilityJudgment", {s: "Lions are carnivores and zebras, which have black-and-white coats, eat plants often, as can be seen on animal shows."}],
[["target-10-too-08", 10], "AcceptabilityJudgment", {s: "Giraffes are herbivores and zebras, which have black-and-white coats unique to each individual, eat plants too, as can be seen on animal shows."}],
[["target-10-nil-08", 10], "AcceptabilityJudgment", {s: "Lions are carnivores and zebras, which have black-and-white coats unique to each individual, eat plants often, as can be seen on animal shows."}],
[["target-10-too-12", 10], "AcceptabilityJudgment", {s: "Giraffes are herbivores and zebras, generally social animals which have distinctive black-and-white coats unique to each individual, eat plants too, as can be seen on animal shows."}],
[["target-10-nil-12", 10], "AcceptabilityJudgment", {s: "Lions are carnivores and zebras, generally social animals which have distinctive black-and-white coats unique to each individual, eat plants often, as can be seen on animal shows."}],

[["target-11-too-00", 11], "AcceptabilityJudgment", {s: "Aunt Suzy is a tea drinker and uncle Jim drinks tea too, my father stated calmly."}],
[["target-11-nil-00", 11], "AcceptabilityJudgment", {s: "Aunt Suzy is a coffee drinker and uncle Jim drinks tea often, my father stated calmly."}],
[["target-11-too-04", 11], "AcceptabilityJudgment", {s: "Aunt Suzy is a tea drinker and uncle Jim, who lived in England, drinks tea too, my father stated calmly."}],
[["target-11-nil-04", 11], "AcceptabilityJudgment", {s: "Aunt Suzy is a coffee drinker and uncle Jim, who lived in England, drinks tea often, my father stated calmly."}],
[["target-11-too-08", 11], "AcceptabilityJudgment", {s: "Aunt Suzy is a tea drinker and uncle Jim, who lived in England and adopted English habits, drinks tea too, my father stated calmly."}],
[["target-11-nil-08", 11], "AcceptabilityJudgment", {s: "Aunt Suzy is a coffee drinker and uncle Jim, who lived in England and adopted English habits, drinks tea often, my father stated calmly."}],
[["target-11-too-12", 11], "AcceptabilityJudgment", {s: "Aunt Suzy is a tea drinker and uncle Jim, who lived in England and adopted English habits concerning food and drinks, drinks tea too, my father stated calmly."}],
[["target-11-nil-12", 11], "AcceptabilityJudgment", {s: "Aunt Suzy is a coffee drinker and uncle Jim, who lived in England and adopted English habits concerning food and drinks, drinks tea often, my father stated calmly."}],

[["target-12-too-00", 12], "AcceptabilityJudgment", {s: "My father is a passionate card player and my mom likes playing cards too, but I have never been into games."}],
[["target-12-nil-00", 12], "AcceptabilityJudgment", {s: "My father is a checkers player and my mom likes playing cards sometimes, but I have never been into games."}],
[["target-12-too-04", 12], "AcceptabilityJudgment", {s: "My father is a card player and my mom, who is all about work, likes playing cards too, but I have never been into games."}],
[["target-12-nil-04", 12], "AcceptabilityJudgment", {s: "My father is a checkers player and my mom, who is all about work, likes playing cards sometimes, but I have never been into games."}],
[["target-12-too-08", 12], "AcceptabilityJudgment", {s: "My father is a card player and my mom, who is all about work and does not have time, likes playing cards too, but I have never been into games."}],
[["target-12-nil-08", 12], "AcceptabilityJudgment", {s: "My father is a checkers player and my mom, who is all about work and does not have time, likes playing cards sometimes, but I have never been into games."}],
[["target-12-too-12", 12], "AcceptabilityJudgment", {s: "My father is a card player and my mom, who is all about work and usually does not have time for anything else, likes playing cards too, but I have never been into games."}],
[["target-12-nil-12", 12], "AcceptabilityJudgment", {s: "My father is a checkers player and my mom, who is all about work and usually does not have time for anything else, likes playing cards sometimes, but I have never been into games."}],

[["target-13-too-00", 13], "AcceptabilityJudgment", {s: "John ran away from the avalanche and the lady escaped too, the aide reported dispassionately."}],
[["target-13-nil-00", 13], "AcceptabilityJudgment", {s: "John set off the avalanche and the lady escaped surprisingly, the aide reported dispassionately."}],
[["target-13-too-04", 13], "AcceptabilityJudgment", {s: "John ran away from the avalanche and the lady, trapped in the cave downhill, escaped too, the aide reported dispassionately."}],
[["target-13-nil-04", 13], "AcceptabilityJudgment", {s: "John set off the avalanche and the lady, trapped in the cave downhill, escaped surprisingly, the aide reported dispassionately."}],
[["target-13-too-08", 13], "AcceptabilityJudgment", {s: "John ran away from the avalanche and the lady, trapped by Dr Evil in the small cave downhill, escaped too, the aide reported dispassionately."}],
[["target-13-nil-08", 13], "AcceptabilityJudgment", {s: "John set off the avalanche and the lady, trapped by Dr Evil in the small cave downhill, escaped surprisingly, the aide reported dispassionately."}],
[["target-13-too-12", 13], "AcceptabilityJudgment", {s: "John ran away from the avalanche and the lady, who was trapped by the sneaky Dr Evil in the small cave downhill, escaped too, the aide reported dispassionately."}],
[["target-13-nil-12", 13], "AcceptabilityJudgment", {s: "John set off the avalanche and the lady, who was trapped by the sneaky Dr Evil in the small cave downhill, escaped surprisingly, the aide reported dispassionately."}],

[["target-14-too-00", 14], "AcceptabilityJudgment", {s: "The family departed and Suzy left too, my sister told us."}],
[["target-14-nil-00", 14], "AcceptabilityJudgment", {s: "The family stayed and Suzy left unexpectedly, my sister told us."}],
[["target-14-too-04", 14], "AcceptabilityJudgment", {s: "The family departed and Suzy, who arrived the earliest, left too, my sister told us."}],
[["target-14-nil-04", 14], "AcceptabilityJudgment", {s: "The family stayed and Suzy, who arrived the earliest, left unexpectedly, my sister told us."}],
[["target-14-too-08", 14], "AcceptabilityJudgment", {s: "The family departed and Suzy, who as the host's best friend arrived the earliest, left too, my sister told us."}],
[["target-14-nil-08", 14], "AcceptabilityJudgment", {s: "The family stayed and Suzy, who as the host's best friend arrived the earliest, left unexpectedly, my sister told us."}],
[["target-14-too-12", 14], "AcceptabilityJudgment", {s: "The family departed and Suzy, who as the host's best friend arrived the earliest to help out with preparations, left too, my sister told us."}],
[["target-14-nil-12", 14], "AcceptabilityJudgment", {s: "The family stayed and Suzy, who as the host's best friend arrived the earliest to help out with preparations, left unexpectedly, my sister told us."}],

[["target-15-too-00", 15], "AcceptabilityJudgment", {s: "Peter's face was filled up with tears and this made Daniel cry too, as John realized immediately."}],
[["target-15-nil-00", 15], "AcceptabilityJudgment", {s: "Peter's face was tense and serious and this made Daniel cry silently, as John realized immediately."}],
[["target-15-too-04", 15], "AcceptabilityJudgment", {s: "Peter's face was filled up with tears and this made Daniel, who could not stand the anticipation, cry too, as John realized immediately."}],
[["target-15-nil-04", 15], "AcceptabilityJudgment", {s: "Peter's face was tense and serious and this made Daniel, who could not stand the anticipation, cry silently, as John realized immediately."}],
[["target-15-too-08", 15], "AcceptabilityJudgment", {s: "Peter's face was filled up with tears and this made Daniel, who could not stand the anticipation of such grave news, cry too, as John realized immediately."}],
[["target-15-nil-08", 15], "AcceptabilityJudgment", {s: "Peter's face was tense and serious and this made Daniel, who could not stand the anticipation of such grave news, cry silently, as John realized immediately."}],
[["target-15-too-12", 15], "AcceptabilityJudgment", {s: "Peter's face was filled up with tears and this made Daniel, who could not stand the anticipation of such grave news after months of hope, cry too, as John realized immediately."}],
[["target-15-nil-12", 15], "AcceptabilityJudgment", {s: "Peter's face was tense and serious and this made Daniel, who could not stand the anticipation of such grave news after months of hope, cry silently, as John realized immediately."}],

[["target-16-too-00", 16], "AcceptabilityJudgment", {s: "The teacher cried out in fear and the policeman yelled too, my mother told us."}],
[["target-16-nil-00", 16], "AcceptabilityJudgment", {s: "The teacher froze in fear and the policeman yelled loudly, my mother told us."}],
[["target-16-too-04", 16], "AcceptabilityJudgment", {s: "The teacher cried out in fear and the policeman, who was much closer, yelled too, my mother told us."}],
[["target-16-nil-04", 16], "AcceptabilityJudgment", {s: "The teacher froze in fear and the policeman, who was much closer, yelled loudly, my mother told us."}],
[["target-16-too-08", 16], "AcceptabilityJudgment", {s: "The teacher cried out in fear and the policeman, who was much closer to the group of kids, yelled too, my mother told us."}],
[["target-16-nil-08", 16], "AcceptabilityJudgment", {s: "The teacher froze in fear and the policeman, who was much closer to the group of kids, yelled loudly, my mother told us."}],
[["target-16-too-12", 16], "AcceptabilityJudgment", {s: "The teacher cried out in fear and the policeman, who was much closer to the group of kids affected by the explosion, yelled too, my mother told us."}],
[["target-16-nil-12", 16], "AcceptabilityJudgment", {s: "The teacher froze in fear and the policeman, who was much closer to the group of kids affected by the explosion, yelled loudly, my mother told us."}],

[["target-17-too-00", 17], "AcceptabilityJudgment", {s: "Patricia had gone to the car and a few moments later the kids left too, and that was the end of the visit."}],
[["target-17-nil-00", 17], "AcceptabilityJudgment", {s: "Patricia had picked up the phone and a few moments later the kids left swiftly, and that was the end of the visit."}],
[["target-17-too-04", 17], "AcceptabilityJudgment", {s: "Patricia had gone to the car and a few moments later the kids, who had great time, left too, and that was the end of the visit."}],
[["target-17-nil-04", 17], "AcceptabilityJudgment", {s: "Patricia had picked up the phone and a few moments later the kids, who had great time, left swiftly, and that was the end of the visit."}],
[["target-17-too-08", 17], "AcceptabilityJudgment", {s: "Patricia had gone to the car and a few moments later the kids, who had great time playing in the sand, left too, and that was the end of the visit."}],
[["target-17-nil-08", 17], "AcceptabilityJudgment", {s: "Patricia had picked up the phone and a few moments later the kids, who had great time playing in the sand, left swiftly, and that was the end of the visit."}],
[["target-17-too-12", 17], "AcceptabilityJudgment", {s: "Patricia had gone to the car and a few moments later the kids, who had great time there playing in the sand with other kids, left too, and that was the end of the visit."}],
[["target-17-nil-12", 17], "AcceptabilityJudgment", {s: "Patricia had picked up the phone and a few moments later the kids, who had great time there playing in the sand with other kids, left swiftly, and that was the end of the visit."}],

[["target-18-too-00", 18], "AcceptabilityJudgment", {s: "The first strategy is more cost-effective, but the second approach works too, the boss claimed unexcitedly."}],
[["target-18-nil-00", 18], "AcceptabilityJudgment", {s: "The first strategy is very error-prone, but the second approach works well, the boss claimed unexcitedly."}],
[["target-18-too-04", 18], "AcceptabilityJudgment", {s: "The first strategy is more cost-effective, but the second approach, which was not yet reviewed, works too, the boss claimed unexcitedly."}],
[["target-18-nil-04", 18], "AcceptabilityJudgment", {s: "The first strategy is very error-prone, but the second approach, which was not yet reviewed, works well, the boss claimed unexcitedly."}],
[["target-18-too-08", 18], "AcceptabilityJudgment", {s: "The first strategy is more cost-effective, but the second approach, which was not yet reviewed by the higher management, works too, the boss claimed unexcitedly."}],
[["target-18-nil-08", 18], "AcceptabilityJudgment", {s: "The first strategy is very error-prone, but the second approach, which was not yet reviewed by the higher management, works well, the boss claimed unexcitedly."}],
[["target-18-too-12", 18], "AcceptabilityJudgment", {s: "The first strategy is more cost-effective, but the second approach, which was not yet reviewed by the higher management and might be dismissed, works too, the boss claimed unexcitedly."}],
[["target-18-nil-12", 18], "AcceptabilityJudgment", {s: "The first strategy is very error-prone, but the second approach, which was not yet reviewed by the higher management and might be dismissed, works well, the boss claimed unexcitedly."}],

[["target-19-too-00", 19], "AcceptabilityJudgment", {s: "She bursts into tears and he cries too, but all seems finished now."}],
[["target-19-nil-00", 19], "AcceptabilityJudgment", {s: "She stops speaking and he cries abruptly, but all seems finished now."}],
[["target-19-too-04", 19], "AcceptabilityJudgment", {s: "She bursts into tears and he, being struck by the truth, cries too, but all seems finished now."}],
[["target-19-nil-04", 19], "AcceptabilityJudgment", {s: "She stops speaking and he, being struck by the truth, cries abruptly, but all seems finished now."}],
[["target-19-too-08", 19], "AcceptabilityJudgment", {s: "She bursts into tears and he, being struck by the terrible truth of what has happened, cries too, but all seems finished now."}],
[["target-19-nil-08", 19], "AcceptabilityJudgment", {s: "She stops speaking and he, being struck by the terrible truth of what has happened, cries abruptly, but all seems finished now."}],
[["target-19-too-12", 19], "AcceptabilityJudgment", {s: "She bursts into tears and he, being struck by the terrible truth of what has happened and what will happen, cries too, but all seems finished now."}],
[["target-19-nil-12", 19], "AcceptabilityJudgment", {s: "She stops speaking and he, being struck by the terrible truth of what has happened and what will happen, cries abruptly, but all seems finished now."}],

[["target-20-too-00", 20], "AcceptabilityJudgment", {s: "My head was aching and my leg hurt too, and this was unfortunate."}],
[["target-20-nil-00", 20], "AcceptabilityJudgment", {s: "My head was numb and my leg hurt badly, and this was unfortunate."}],
[["target-20-too-04", 20], "AcceptabilityJudgment", {s: "My head was aching and my leg, which was fine yesterday, hurt too, and this was unfortunate."}],
[["target-20-nil-04", 20], "AcceptabilityJudgment", {s: "My head was numb and my leg, which was fine yesterday, hurt badly, and this was unfortunate."}],
[["target-20-too-08", 20], "AcceptabilityJudgment", {s: "My head was aching and my leg, which was fairly fine yesterday after the accident, hurt too, and this was unfortunate."}],
[["target-20-nil-08", 20], "AcceptabilityJudgment", {s: "My head was numb and my leg, which was fairly fine yesterday after the accident, hurt badly, and this was unfortunate."}],
[["target-20-too-12", 20], "AcceptabilityJudgment", {s: "My head was aching and my leg, which was fairly fine yesterday after the accident because of an adrenaline rush, hurt too, and this was unfortunate."}],
[["target-20-nil-12", 20], "AcceptabilityJudgment", {s: "My head was numb and my leg, which was fairly fine yesterday after the accident because of an adrenaline rush, hurt badly, and this was unfortunate."}],

[["target-21-too-00", 21], "AcceptabilityJudgment", {s: "The anti-conspiracy law was introduced in January and the anti-corruption bill was initiated too, the BBC reported this morning."}],
[["target-21-nil-00", 21], "AcceptabilityJudgment", {s: "The anti-conspiracy law was cancelled in January and the anti-corruption bill was initiated yesterday, the BBC reported this morning."}],
[["target-21-too-04", 21], "AcceptabilityJudgment", {s: "The anti-conspiracy law was introduced in January and the anti-corruption bill, important for the president, was initiated too, the BBC reported this morning."}],
[["target-21-nil-04", 21], "AcceptabilityJudgment", {s: "The anti-conspiracy law was canceled in January and the anti-corruption bill, important for the president, was initiated yesterday, the BBC reported this morning."}],
[["target-21-too-08", 21], "AcceptabilityJudgment", {s: "The anti-conspiracy law was introduced in January and the anti-corruption bill, important for the president because of the allegations, was initiated too, the BBC reported this morning."}],
[["target-21-nil-08", 21], "AcceptabilityJudgment", {s: "The anti-conspiracy law was canceled in January and the anti-corruption bill, important for the president because of the allegations, was initiated yesterday, the BBC reported this morning."}],
[["target-21-too-12", 21], "AcceptabilityJudgment", {s: "The anti-conspiracy law was introduced in January and the anti-corruption bill, important for the president because of the allegations of corruption within the party, was initiated too, the BBC reported this morning."}],
[["target-21-nil-12", 21], "AcceptabilityJudgment", {s: "The anti-conspiracy law was canceled in January and the anti-corruption bill, important for the president because of the allegations of corruption within the party, was initiated yesterday, the BBC reported this morning."}],

[["target-22-too-00", 22], "AcceptabilityJudgment", {s: "Facebook received money, and Google was subsidised too, my mother pointed out."}],
[["target-22-nil-00", 22], "AcceptabilityJudgment", {s: "Facebook used Harvard's network, and Google was subsidised hugely, my mother pointed out."}],
[["target-22-too-04", 22], "AcceptabilityJudgment", {s: "Facebook received money, and Google, a huge internet brand, was subsidised too, my mother pointed out."}],
[["target-22-nil-04", 22], "AcceptabilityJudgment", {s: "Facebook used Harvard's network, and Google, a huge internet brand, was subsidised hugely, my mother pointed out."}],
[["target-22-too-08", 22], "AcceptabilityJudgment", {s: "Facebook received money, and Google, a huge internet brand which changed our lives, was subsidised too, my mother pointed out."}],
[["target-22-nil-08", 22], "AcceptabilityJudgment", {s: "Facebook used Harvard's network, and Google, a huge internet brand which changed our lives, was subsidised hugely, my mother pointed out."}],
[["target-22-too-12", 22], "AcceptabilityJudgment", {s: "Facebook received money, and Google, a huge internet brand which changed our daily lives in many ways, was subsidised too, my mother pointed out."}],
[["target-22-nil-12", 22], "AcceptabilityJudgment", {s: "Facebook used Harvard's network, and Google, a huge internet brand which changed our daily lives in many ways, was subsidised hugely, my mother pointed out."}],

[["target-23-too-00", 23], "AcceptabilityJudgment", {s: "Our train was rushing west and Jodie was running too, as John observed in shock."}],
[["target-23-nil-00", 23], "AcceptabilityJudgment", {s: "Our train was lingering west and Jodie was running quickly, as John observed in shock."}],
[["target-23-too-04", 23], "AcceptabilityJudgment", {s: "Our train was rushing west and Jodie, frantic to make a sound, was running too, as John observed in shock."}],
[["target-23-nil-04", 23], "AcceptabilityJudgment", {s: "Our train was lingering west and Jodie, frantic to make a sound, was running quickly, as John observed in shock."}],
[["target-23-too-08", 23], "AcceptabilityJudgment", {s: "Our train was rushing west and Jodie, frantic to make a sound for anyone to notice, was running too, as John observed in shock."}],
[["target-23-nil-08", 23], "AcceptabilityJudgment", {s: "Our train was lingering west and Jodie, frantic to make a sound for anyone to notice, was running quickly, as John observed in shock."}],
[["target-23-too-12", 23], "AcceptabilityJudgment", {s: "Our train was rushing west and Jodie, frantic to make a sound for anyone to notice and help with the injured, was running too, as John observed in shock."}],
[["target-23-nil-12", 23], "AcceptabilityJudgment", {s: "Our train was lingering west and Jodie, frantic to make a sound for anyone to notice and help with the injured, was running quickly, as John observed in shock."}],

[["target-24-too-00", 24], "AcceptabilityJudgment", {s: "The kids were apologetic and Suzy felt sorry too, I have suddenly realized."}],
[["target-24-nil-00", 24], "AcceptabilityJudgment", {s: "The kids were indifferent and Suzy felt sorry instantly, I have suddenly realized."}],
[["target-24-too-04", 24], "AcceptabilityJudgment", {s: "The kids were apologetic and Suzy, emotionally attached to them, felt sorry too, I have suddenly realized."}],
[["target-24-nil-04", 24], "AcceptabilityJudgment", {s: "The kids were indifferent and Suzy, emotionally attached to them, felt sorry instantly, I have suddenly realized."}],
[["target-24-too-08", 24], "AcceptabilityJudgment", {s: "The kids were apologetic and Suzy, who must have grown emotionally attached to them, felt sorry too, I have suddenly realized."}],
[["target-24-nil-08", 24], "AcceptabilityJudgment", {s: "The kids were indifferent and Suzy, who must have grown emotionally attached to them, felt sorry instantly, I have suddenly realized."}],
[["target-24-too-12", 24], "AcceptabilityJudgment", {s: "The kids were apologetic and Suzy, who must have grown emotionally attached to them over all these years, felt sorry too, I have suddenly realized."}],
[["target-24-nil-12", 24], "AcceptabilityJudgment", {s: "The kids were indifferent and Suzy, who must have grown emotionally attached to them over all these years, felt sorry instantly, I have suddenly realized."}],

[["target-25-too-00", 25], "AcceptabilityJudgment", {s: "The robots were functioning and the humans were working too, people from the management claimed."}],
[["target-25-nil-00", 25], "AcceptabilityJudgment", {s: "The robots were idle and the humans were working swiftly, people from the management claimed."}],
[["target-25-too-04", 25], "AcceptabilityJudgment", {s: "The robots were functioning and the humans, brought for the job, were working too, people from the management claimed."}],
[["target-25-nil-04", 25], "AcceptabilityJudgment", {s: "The robots were idle and the humans, brought for the job, were working swiftly, the management claimed."}],
[["target-25-too-08", 25], "AcceptabilityJudgment", {s: "The robots were functioning and the humans, brought to the planet specifically for the job, were working too, people from the management claimed."}],
[["target-25-nil-08", 25], "AcceptabilityJudgment", {s: "The robots were idle and the humans, brought to the planet specifically for the job, were working swiftly, people from the management claimed."}],
[["target-25-too-12", 25], "AcceptabilityJudgment", {s: "The robots were functioning and the humans, brought to the planet specifically for the job since it needed their supervision, were working too, people from the management claimed."}],
[["target-25-nil-12", 25], "AcceptabilityJudgment", {s: "The robots were idle and the humans, brought to the planet specifically for the job since it needed their supervision, were working swiftly, people from the management claimed."}],

[["target-26-too-00", 26], "AcceptabilityJudgment", {s: "The writing style is important and illustrations help too, the critic stated soberly."}],
[["target-26-nil-00", 26], "AcceptabilityJudgment", {s: "The writing style is terrible and illustrations help much, the critic stated soberly."}],
[["target-26-too-04", 26], "AcceptabilityJudgment", {s: "The writing style is important and illustrations, which suit the story, help too, the critic stated soberly."}],
[["target-26-nil-04", 26], "AcceptabilityJudgment", {s: "The writing style is terrible and illustrations, which suit the story, help much, the critic stated soberly."}],
[["target-26-too-08", 26], "AcceptabilityJudgment", {s: "The writing style is important and illustrations, which suit the story and add interpretative depth, help too, the critic stated soberly."}],
[["target-26-nil-08", 26], "AcceptabilityJudgment", {s: "The writing style is terrible and illustrations, which suit the story and add interpretative depth, help much, the critic stated soberly."}],
[["target-26-too-12", 26], "AcceptabilityJudgment", {s: "The writing style is important and illustrations, which really suit the story very well and add fascinating interpretative depth, help too, the critic stated soberly."}],
[["target-26-nil-12", 26], "AcceptabilityJudgment", {s: "The writing style is terrible and illustrations, which really suit the story very well and add fascinating interpretative depth, help much, the critic stated soberly."}],

[["target-27-too-00", 27], "AcceptabilityJudgment", {s: "The Motorsport Association has evolved over the years and the drivers have changed too, according to the author."}],
[["target-27-nil-00", 27], "AcceptabilityJudgment", {s: "The Motorsport Association has issued new rules of conduct and the drivers have changed swiftly, according to the author."}],
[["target-27-too-04", 27], "AcceptabilityJudgment", {s: "The Motorsport Association has evolved over the years and the drivers, pillars of the association, have changed too, according to the author."}],
[["target-27-nil-04", 27], "AcceptabilityJudgment", {s: "The Motorsport Association has issued new rules of conduct and the drivers, pillars of the association, have changed swiftly, according to the author."}],
[["target-27-too-08", 27], "AcceptabilityJudgment", {s: "The Motorsport Association has evolved over the years and the drivers, pillars of the association and its core values, have changed too, according to the author."}],
[["target-27-nil-08", 27], "AcceptabilityJudgment", {s: "The Motorsport Association has issued new rules of conduct and the drivers, pillars of the association and its core values, have changed swiftly, according to the author."}],
[["target-27-too-12", 27], "AcceptabilityJudgment", {s: "The Motorsport Association has evolved over the years and the drivers, the main pillars of the association and bearers of its core values, have changed too, according to the author."}],
[["target-27-nil-12", 27], "AcceptabilityJudgment", {s: "The Motorsport Association has issued new rules of conduct and the drivers, the main pillars of the association and bearers of its core values, have changed swiftly, according to the author."}],

[["target-28-too-00", 28], "AcceptabilityJudgment", {s: "Justine cracked up and Mary laughed too, while looking around her."}],
[["target-28-nil-00", 28], "AcceptabilityJudgment", {s: "Justine looked worried and Mary laughed loudly, while looking around her."}],
[["target-28-too-04", 28], "AcceptabilityJudgment", {s: "Justine cracked up and Mary, who held the cat, laughed too, while looking around her."}],
[["target-28-nil-04", 28], "AcceptabilityJudgment", {s: "Justine looked worried and Mary, who held the cat, laughed loudly, while looking around her."}],
[["target-28-too-08", 28], "AcceptabilityJudgment", {s: "Justine cracked up and Mary, who held the cat as it peed with relief, laughed too, while looking around her."}],
[["target-28-nil-08", 28], "AcceptabilityJudgment", {s: "Justine looked worried and Mary, who held the cat as it peed with relief, laughed loudly, while looking around her."}],
[["target-28-too-12", 28], "AcceptabilityJudgment", {s: "Justine cracked up and Mary, who held the cat as it peed with relief over the neighbor's flowers, laughed too, while looking around her."}],
[["target-28-nil-12", 28], "AcceptabilityJudgment", {s: "Justine looked worried and Mary, who held the cat as it peed with relief over the neighbor's flowers, laughed loudly, while looking around her."}],

[["target-29-too-00", 29], "AcceptabilityJudgment", {s: "Senator Pye was found dead and some local people were killed too, the FBI revealed during a conference."}],
[["target-29-nil-00", 29], "AcceptabilityJudgment", {s: "Senator Pye was found missing and some local people were killed violently, the FBI revealed during a conference."}],
[["target-29-too-04", 29], "AcceptabilityJudgment", {s: "Senator Pye was found dead and some local people, who the suspect contacted, were killed too, the FBI revealed during a conference."}],
[["target-29-nil-04", 29], "AcceptabilityJudgment", {s: "Senator Pye was found missing and some local people, who the suspect contacted, were killed violently, the FBI revealed during a conference."}],
[["target-29-too-08", 29], "AcceptabilityJudgment", {s: "Senator Pye was found dead and some local people, who the suspect contacted to offer them work, were killed too, the FBI revealed during a conference."}],
[["target-29-nil-08", 29], "AcceptabilityJudgment", {s: "Senator Pye was found missing and some local people, who the suspect contacted to offer them work, were killed violently, the FBI revealed during a conference."}],
[["target-29-too-12", 29], "AcceptabilityJudgment", {s: "Senator Pye was found dead and some local people, who the suspect contacted to offer them work as models in pictures, were killed too, the FBI revealed during a conference."}],
[["target-29-nil-12", 29], "AcceptabilityJudgment", {s: "Senator Pye was found missing and some local people, who the suspect contacted to offer them work as models in pictures, were killed violently, the FBI revealed during a conference."}],

[["target-30-too-00", 30], "AcceptabilityJudgment", {s: "The Cincinnati Bengals suffered a loss on Sunday and the rest of the AFC North lost too, the ESPN reporter stated."}],
[["target-30-nil-00", 30], "AcceptabilityJudgment", {s: "The Cincinnati Bengals gained a win on Sunday and the rest of the AFC North lost badly, the ESPN reporter stated."}],
[["target-30-too-04", 30], "AcceptabilityJudgment", {s: "The Cincinnati Bengals suffered a loss on Sunday and the rest of the AFC North, which looked strong earlier, lost too, the ESPN reporter stated."}],
[["target-30-nil-04", 30], "AcceptabilityJudgment", {s: "The Cincinnati Bengals gained a win on Sunday and the rest of the AFC North, which looked strong earlier, lost badly, the ESPN reporter stated."}],
[["target-30-too-08", 30], "AcceptabilityJudgment", {s: "The Cincinnati Bengals suffered a loss on Sunday and the rest of the AFC North, which looked quite strong earlier in the season, lost too, the ESPN reporter stated."}],
[["target-30-nil-08", 30], "AcceptabilityJudgment", {s: "The Cincinnati Bengals gained a win on Sunday and the rest of the AFC North, which looked quite strong earlier in the season, lost badly, the ESPN reporter stated."}],
[["target-30-too-12", 30], "AcceptabilityJudgment", {s: "The Cincinnati Bengals suffered a loss on Sunday and the rest of the AFC North, which looked quite strong earlier in the season noting their mostly positive record, lost too, the ESPN reporter stated."}],
[["target-30-nil-12", 30], "AcceptabilityJudgment", {s: "The Cincinnati Bengals gained a win on Sunday and the rest of the AFC North, which looked quite strong earlier in the season noting their mostly positive record, lost badly, the ESPN reporter stated."}],

[["target-31-too-00", 31], "AcceptabilityJudgment", {s: "The husky halted and the man stopped too, and they were still for a second."}],
[["target-31-nil-00", 31], "AcceptabilityJudgment", {s: "The husky jumped and the man stopped suddenly, and they were still for a second."}],
[["target-31-too-04", 31], "AcceptabilityJudgment", {s: "The husky halted and the man, seemingly scared by the noise, stopped too, and they were still for a second."}],
[["target-31-nil-04", 31], "AcceptabilityJudgment", {s: "The husky jumped and the man, seemingly scared by the noise, stopped suddenly, and they were still for a second."}],
[["target-31-too-08", 31], "AcceptabilityJudgment", {s: "The husky halted and the man, seemingly scared by the noise appearing out of nowhere, stopped too, and they were still for a second."}],
[["target-31-nil-08", 31], "AcceptabilityJudgment", {s: "The husky stopped and the man, seemingly scared by the noise appearing out of nowhere, stopped suddenly, and they were still for a second."}],
[["target-31-too-12", 31], "AcceptabilityJudgment", {s: "The husky halted and the man, seemingly scared by the noise appearing out of nowhere in the calm scenery, stopped too, and they were still for a second."}],
[["target-31-nil-12", 31], "AcceptabilityJudgment", {s: "The husky jumped and the man, seemingly scared by the noise appearing out of nowhere in the calm scenery, stopped suddenly, and they were still for a second."}],


[["filler-33", 33], "AcceptabilityJudgment", {s: "Eric likes playing with Ernie and he does not like playing with Pat, Suzan told me."}],

[["filler-34", 34], "AcceptabilityJudgment", {s: "If Oliver swims with sharks he will like it, Johnny realized."}],

[["filler-35", 35], "AcceptabilityJudgment", {s: "Ms Smith is nothing if not an insistent detective, as the host on the radio observed."}],

[["filler-36", 36], "AcceptabilityJudgment", {s: "If Cassandra, who loves listening to the radio, watches any television at all, it is a documentary or a news program, never a movie or a show."}],

[["filler-37", 37], "AcceptabilityJudgment", {s: "Megan plans to go to Sweden with Hugh or they will stay in her parents' house."}],

[["filler-38", 38], "AcceptabilityJudgment", {s: "Alan and Rebecca will only organize the food at the barbecue or they will set the table, Caroline informed me."}],

[["filler-39", 39], "AcceptabilityJudgment", {s: "If there is a cow in that room, then I am a monkey's uncle or something else entirely."}],

[["filler-40", 40], "AcceptabilityJudgment", {s: "When Mildred goes on vacation, she always goes somewhere exotic and then brags about it for weeks."}],

[["filler-41", 41], "AcceptabilityJudgment", {s: "Jeremy argued with Mary, then he argued with Peter, who was clearly offended, and then he left."}],

[["filler-42", 42], "AcceptabilityJudgment", {s: "Mr Martin dreamed of building a house or of planting a tree, Peter told us in secret."}],

[["filler-43", 43], "AcceptabilityJudgment", {s: "Suzan was told to look up the case files or to do something useful, or to go home."}],

[["filler-44", 44], "AcceptabilityJudgment", {s: "While this is technically convenient for coding purposes, it is neither theoretically satisfactory, nor validated in practice."}],

[["filler-45", 45], "AcceptabilityJudgment", {s: "Neither eating nor drinking plays much of a role at a traditional Kurdish wedding."}],

[["filler-46", 46], "AcceptabilityJudgment", {s: "Neither Baca nor Tony Costa had ever seen Michael."}],

[["filler-47", 47], "AcceptabilityJudgment", {s: "Neither he nor his father ever mentioned the book, which his mother had discreetly put on his shelf."}],

[["filler-48", 48], "AcceptabilityJudgment", {s: "As far as I am aware, neither Qaddafi's translator nor anyone else protested."}],

[["filler-49", 49], "AcceptabilityJudgment", {s: "If the sovereign is the principal, then the contractor retained by the contracting official is a subagent, as the handbook stated."}],

[["filler-50", 50], "AcceptabilityJudgment", {s: "It is not as though insurance companies do not know, or can not find out when a policyholder has passed on, Jamie stated with sarcasm."}],

[["filler-51", 51], "AcceptabilityJudgment", {s: "Marianne wanted either to go to the gym to work it off or try for a drop-in appointment at her hairdresser's where she would be cosseted."}],

[["filler-52", 52], "AcceptabilityJudgment", {s: "The red panda species has been classified as endagered and is being protected in all the countries it inhabits, as claimed by Wikipedia, the free encyclopedia."}],

[["filler-53", 53], "AcceptabilityJudgment", {s: "Indira Gandhi was an Indian prime minister and, interestingly, she kept red pandas, which were offered to her family as a gift, in a special tree house."}],

[["filler-54", 54], "AcceptabilityJudgment", {s: "The western red panda lives in Nepal, Assam, Sikkim and Bhutan while the Styan's red panda lives in Southern China and Northern Burma, the travel's guide stated."}],


[["control-55", 55], "AcceptabilityJudgment", {s: "Alice has no neighbor and he hates her."}],

[["control-56", 56], "AcceptabilityJudgment", {s: "He ate a pancake and fried it for his breakfast last morning."}],

[["control-57", 57], "AcceptabilityJudgment", {s: "They were talking about herself during yesterday's lunch."}],

[["control-58", 58], "AcceptabilityJudgment", {s: "It is not raining and Wirrin, who likes his umbrella very much, knows that it is raining."}],

[["control-59", 59], "AcceptabilityJudgment", {s: "Akari has speak with Sanne about their wedding."}],

[["control-60", 60], "AcceptabilityJudgment", {s: "She was very proud of himself this time."}],

[["control-61", 61], "AcceptabilityJudgment", {s: "Silver shiny coin was rolling down wooden floor."}],

[["control-62", 62], "AcceptabilityJudgment", {s: "Sana, Suzy, Jacques and Waru were laughing each other the whole afternoon."}],

[["control-63", 63], "AcceptabilityJudgment", {s: "She danced herself how to do braids, which turned out very difficult for her, just to make Jedda happy."}],

[["control-64", 64], "AcceptabilityJudgment", {s: "He never wore any pants, so he took the wallet out of the pants which he was wearing."}],

];
