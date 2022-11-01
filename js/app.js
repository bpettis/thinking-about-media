const titles = ["The Simpsons", "The Masked Singer", "Bachelor in Paradise", "Love Island", "Big Brother", "Mr. Rogers' Neighborhood", "Thomas the Tank Engine", "The Day After", "The Thing", "Shrek 3", "The Bee Movie", "Troll 2", "Mario Kart Double Dash", "3D Space Cadet Pinball", "Microsoft Paint", "Titanic", "The Joy of Painting with Bob Ross", "Star Wars", "Star Trek", "Stranger Things"];
const platforms = ["Facebook", "MySpace", "Twitter", "Tumblr", "4chan", "Spotify", "Geocities", "Mastodon", "Trump's TRUTH Social Twitter Clone", "LinkedIn", "Club Penguin", "Microsoft Office", "Netflix", "Paramount+"];


grammar = tracery.createGrammar({
    oneliner: [
        "What's the deal with airline food?",
        "It's the greatest thing since sliced bread",
        "Kids these days...",
        "Trust me, bro",
        "Won't somebody think of the children?"
    ],
    phenomenon: [
        "context collapse",
        "commodification",
        "globalization",
        "neoliberalization",
        "gamification",
        "climate change",
        "digital disembedding",
        "political polarization",
        "radicalization",
        "conspiratorial thinking",
        "datafication"
    ],
    organization: [
        'The Federal Communications Commissions',
        'The Motion Picture Production Association of America',
        'The European Union',
        'The White House'
    ],
    concept: ["media literacy", "media production", "media labor", "identity", "gender", "nationality", "media effects research project", "ethics of care", "digital native", "race", "stereotype", "media conglomeration", 'regulatory capture'],
    medium: ["television", "social media", "game", "video game", "app"],
    era1: ["modern", "postmodern", "premodern", "contemporary"],
    era2: ["future", "past", "not-so-distant past"],
    year: ["2020", "2005", "1950", "1996"],
    year1: ["1900", "1850", "1935", "1923"],
    celebrity: ["Elon Musk", "Donald Trump", "Barack Obama", "Keanu Reeves", "John Cena", "Tia Tequila", "Barry Goldwater", "Richard Nixon", "Dr Dre"],
    publication: ["The New York Times", "Newsweek", "Some Guy's family newsletter", "The Washington Post", "US Weekly", "USA Today", "a local newspaper", "Der Spigel", "Le Monde"],
    negativeResponse: ["protest", "complain", "shitpost", "criticize", "lament", "gripe", "grump"],
    positiveResponse: ["celebrate", "approve", "agrees with"],
    theorist: ["Marx", "Gramsci", "Judith Butler", "Louis Althusser", "Foucault", "Gilles Deleuze"],
    framework: ["critical", "feminist", "psychoanalytical", "critical code studies", "media industries", "critical political economy"],
    method: ["Critical Technocultural Discourse Analysis", "focus groups", "a series of qualtrics surveys", "ethnography", "autoethnography", "semi-structured interviews"],
    studyVerb: ["study", "examine", "critique", "analyze", "interrogate", "consider", "question"],
    object: ["<em>#text#</em>", "#platform#", "#organization#"],
    titles: [
        "Revisiting #theorist# in the 21st Century: A #framework.capitalize# analysis.",
        "Why study #theorist# anyway?",
        "#object# as #framework.capitalize# Praxis: A Model for Using #era1.a.capitalize# Perspective to Look Toward the #era2.capitalize#",
        "\"#oneliner.capitalize#\": A (re)imagination of #object#",
        "#celebrity# or #theorist#? Assessing #concept# in #year#",
        "Making a case for #era1# #phenomenon#",
        "Measuring #era2.s# of #concept#",
        "#object.a.capitalize# Manifesto: Applying #theorist# to #framework# #concept.s#",
        "#celebrity# #positiveResponse.s# but #theorist# #negativeResponse.s#: Making sense of #phenomenon# from #year1# - #year#",
        "How #medium.s# change us.",
        "What #platform# did to #celebrity#: #framework.a# analysis of #phenomenon# and #medium.s#",
        "\"#oneliner.capitalize#\": What #celebrity# did for #platform#",
        "Does #theorist# still matter in #year#? Using #method# to re-examine #celebrity#'s #negativeResponse# in <em>#publication#</em>",
        "#object#? More like #era1.capitalize# #publication#! Using #method# to #studyVerb# #phenomenon#",
        "\"#oneliner#\": A longitudinal effects of #medium# on #phenomenon# from #year1# - #year#",
        "Is #concept# real? #theorist# #positiveResponse.s# to #era1# #medium#",
        "The #era2# of #medium.s#: Envisioning #concept# after #year#",
        "\"#oneliner#\" #celebrity# said what!?",
        "Using #theorist# to #studyVerb# the production of #concept# in #medium.s#",
        "Should #object# be involved with #phenomenon# after #year#?: The effects of #concept# on #medium.s#",
        "#celebrity#, #publication#, and #object#: An Exploratory Analysis",
        "#object# after #year#: Toward #framework.a# understanding of #medium.s#",
        "Revisiting #theorist# after #year1#: Toward #era1.a# #framework# analysis of #medium.s#"
    ],
    stakes: [
        "#object# is representative of the contemporary reality of political polarization",
        "scholars must pay more attention to #object#",
        "#object# shows that scholars must return to #platform#",
        "despite the increased frequency of #phenomenon#, it remains important that we not lose sight of the important gains that have been made since #year#",
        "#celebrity# and #theorist# are most similar than one might initially think", 
        "scholars have significant power to #negativeResponse# about #medium.s# and indeed have the moral responsibility to do so",
        "#phenomenon# represents a looming epistemological crisis that remains under-acknowledged",
        "#object.s# offer a valuable perspective for understanding the #era2# of #era1# #medium.s#"
    ],
    abstracts: [
        "This paper uses #framework# methods to study #object# as an example of #phenomenon# in the #era1# era. In #year#, #celebrity.capitalize# was criticized for making comments about <em>#text#</em> in a widely-read opinion piece in <em>#publication.capitalize#</em>. In response, thousands of #platform# users #negativeResponse.ed#, temporarily causing the website to crash. This paper uses #method# to #studyVerb# this phenomenon and argues that #stakes#.",
        "Since #year# it has become increasingly apparent that #celebrity# has had an outspoken influence on #concept#. But this relationship is not limited to #era1# media contexts. As early as #year1# early instances of #phenomenon# could be seen emerging with an orientation toward the #era2#. In this paper, I argue that #stakes#. To do this, the paper draws upon #framework# frameworks to inform its use of #method# to critically examine #object#.",
        "Though using #theorist# has become passé ever since #year#, the recent uptick of #celebrity# using #platform# necessitates a reconsideration. From #year# through #year1#, many have #negativeResponse.ed# the growth of #phenomenon#. #oneliner# is a common refrain found in many #publication# interviews. Accordingly, this paper uses #framework# approaches to #method# as a way to #studyVerb# #object#. By doing so, the paper argues that #stakes#.",
        "<em>#text.capitalize#</em> has been extensively #negativeResponse.ed# by #celebrity# in <em>#publication#</em>. Despite this attention, scholars have yet to apply #framework# #method# to #studyVerb# #object#. This paper argues that by doing so, it may be possible to develop a new perspective on #era2# #medium.s#. Ultimately, I demonstrate that #stake#."
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