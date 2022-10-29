const titles = ["The Simpsons", "The Masked Singer", "Bachelor in Paradise", "Love Island", "Big Brother", "Mr. Rogers' Neighborhood", "Thomas the Tank Engine", "The Day After", "The Thing", "Shrek 3", "The Bee Movie", "Troll 2"];
const platforms = ["Facebook", "MySpace", "Twitter", "Tumblr", "4chan"];


grammar = tracery.createGrammar({
    oneliner: ["What's the deal with airline food?", "It's the greatest thing since sliced bread", "Kids these days..."],
    phenomenon: ["context collapse", "commodification", "globalization", "neoliberalization", "gamification", "climate change", "digital disembedding", "political polarization"],
    concept: ["media literacy", "media production", "media labor", "identity", "gender", "nationality", "media effects research"],
    era1: ["modern", "postmodern", "premodern", "contemporary"],
    era2: ["future", "past", "not-so-distant past"],
    year: ["2020", "2005", "1950", "1996"],
    year1: ["1900", "1850", "1935", "1923"],
    celebrity: ["Elon Musk", "Donald Trump", "Barack Obama", "Keanu Reeves", "John Cena"],
    publication: ["The New York Times", "Newsweek", "Some Guy's family newsletter", "The Washington Post", "US Weekly", "USA Today", "a local newspaper", "Der Spigel", "Le Monde"],
    negativeResponse: ["protest", "complain", "shitpost", "criticize", "lament", "gripe", "grump"],
    positiveResponse: ["celebrate", "approve", "agree"],
    theorist: ["Marx", "Gramsci", "Judith Butler", "Louis Althusser", "Foucault", "Gilles Deleuze"],
    framework: ["critical", "feminist", "psychoanalytical"],
    method: ["Critical Technocultural Discourse Analysis", "focus groups", "a series of qualtrics surveys", "ethnography", "autoethnography"],
    studyVerb: ["study", "examine", "critique", "analyze", "interrogate"],
    object: ["<em>#text#</em>", "#platform#"],
    titles: [
        "Revisiting #theorist# in the 21st Century: A #framework.capitalize# analysis.",
        "Why study #theorist# anyway?", "#object# as #framework.capitalize# Praxis: A Model for Using #era1.a.capitalize# Perspective to Look Toward the #era2.capitalize#",
        "\"#oneliner.capitalize#\": A (re)imagination of #object#",
        "#celebrity# or #theorist#? Assessing #concept# in #year#",
        "Making a case for #era1# #phenomenon#",
        "Measuring #era2.s# of #concept#",
        "#object.a# Manifesto: Applying #theorist# to #framework# #concept.s#",
        "#celebrity# #positiveResponse.s# but #theorist# #negativeResponse.s#: Making sense of #phenomenon# from #year1# - #year#" 
    ],
    stakes: ["#object# is representative of the contemporary reality of political polarization", "scholars must pay more attention to #object#", "#object# shows that scholars must return to #platform#", "despite the increased frequency of #phenomenon#, it remains important that we not lose sight of the important gains that have been made since #year#."],
    abstracts: [
        "This paper uses #framework# methods to study #object# as an example of #phenomenon# in the #era1# era. In #year#, #celebrity.capitalize# was criticized for making comments about <em>#text#</em> in a widely-read opinion piece in <em>#publication.capitalize#</em>. In response, thousands of #platform# users #negativeResponse.ed#, temporarily causing the website to crash. This paper uses #method# to #studyVerb# this phenomenon and argues that #stakes#.",
        "Since #year# it has become increasingly apparent that #celebrity# has had an outspoken influence on #concept#. But this relationship is not limited to #era1# media contexts. As early as #year1# early instances of #phenomenon# could be seen emerging with an orientation toward the #era2#. In this paper, I argue that #stakes#. To do this, the paper draws upon #framework# frameworks to inform its use of #method# to critically examine #object#."
    ]
});
grammar.addModifiers(baseEngModifiers);
generatePaper();

function generatePaper() {
    grammar.pushRules("text", [titles[Math.floor(Math.random() * titles.length)]]);
    grammar.pushRules("platform", [platforms[Math.floor(Math.random() * platforms.length)]]);
    var paperTitle = grammar.flatten("#titles#");
    var paperAbstract = grammar.flatten("#abstracts#");
    document.getElementById("title").innerHTML = paperTitle;
    document.getElementById("abstract").innerHTML = paperAbstract;
}