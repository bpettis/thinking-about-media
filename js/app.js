const titles = ["The Simpsons", "The Masked Singer", "Bachelor in Paradise", "Love Island", "Big Brother", "Mr. Rogers' Neighborhood", "Thomas the Tank Engine", "The Day After", "The Thing", "Shrek 3", "The Bee Movie", "Troll 2"];
const platforms = ["Facebook", "MySpace", "Twitter", "Tumblr", "4chan"];


grammar = tracery.createGrammar({
    oneliner: ["What's the deal with airline food?"],
    phenomenon: ["context collapse", "commodification", "globalization", "neoliberalization", "gamification"],
    era1: ["modern", "postmodern", "premodern", "contemporary"],
    era2: ["future", "past", "not-so-distant past"],
    year: ["2020", "2005", "1950", "1996"],
    celebrity: ["Elon Musk", "Donald Trump", "Barack Obama"],
    publication: ["The New York Times", "Newsweek", "Some Guy's family newsletter", "The Washington Post", "US Weekly"],
    negativeResponse: ["protest", "complain", "shitpost", "criticize", "lament", "gripe", "grump"],
    positiveResponse: ["celebrate", "approve", "agree"],
    theorist: ["Marx", "Gramsci", "Judith Butler"],
    framework: ["critical", "feminist", "psychoanalytical"],
    method: ["Critical Technocultural Discourse Analysis"],
    studyVerb: ["study", "examine", "critique", "analyze", "interrogate"],
    object: ["<em>#text#</em>", "#platform#"],
    titles: ["Revisiting #theorist# in the 21st Century: A #framework.capitalize# analysis.", "Why study #theorist# anyway?", "#object# as #framework.capitalize# Praxis: A Model for Using #era1.a.capitalize# Perspective to Look Toward the #era2.capitalize#", "\"#oneliner.capitalize#\": A (re)imagination of #object#"],
    stakes: ["#object# is representative of the contemporary reality of political polarization", "scholars must pay more attention to #object#", "#object# shows that scholars must return to #platform#"],
    abstracts: ["This paper uses #framework# methods to study #object# as an example of #phenomenon# in the #era1# era. In #year#, #celebrity.capitalize# was criticized for making comments about <em>#text#</em> in a widely-read opinion piece in <em>#publication.capitalize#</em>. In response, thousands of #platform# users #negativeResponse.ed#, temporarily causing the website to crash. This paper uses #method# to #studyVerb# this phenomenon and argues that #stakes#."]
});
grammar.addModifiers(baseEngModifiers);
grammar.pushRules("text", [titles[Math.floor(Math.random() * titles.length)]]);
grammar.pushRules("platform", [platforms[Math.floor(Math.random() * platforms.length)]]);
var paperTitle = grammar.flatten("#titles#");
var paperAbstract = grammar.flatten("#abstracts#");
document.getElementById("title").innerHTML = paperTitle;
document.getElementById("abstract").innerHTML = paperAbstract;