function redact(text)
{
  text = text.replace(/asshole/gi, "<span class='redacted'>jerk</span>");
  text = text.replace(/bitches/gi, "<span class='redacted'>lizzies</span>");
  text = text.replace(/bitching/gi, "<span class='redacted'>yelling</span>");
  text = text.replace(/boyfriend/gi, "<span class='redacted'>father</span>");
  text = text.replace(/bullshit/gi, "<span class='redacted'>lies</span>");
  text = text.replace(/button/gi, "<span class='redacted'>command</span>");
  text = text.replace(/christian/gi, "<span class='redacted'>buddhist</span>");
  text = text.replace(/clitoris/gi, "<span class='redacted'>tongue</span>");
  text = text.replace(/ejaculated/gi, "<span class='redacted'>spat</span>");
  text = text.replace(/girlfriend/gi, "<span class='redacted'>mother</span>");
  text = text.replace(/goddam/gi, "<span class='redacted'>freakin'</span>");
  text = text.replace(/goddamn/gi, "<span class='redacted'>freakin'</span>");
  text = text.replace(/mother fucker/gi, "<span class='redacted'>fool</span>");
  text = text.replace(/motherfucker/gi, "<span class='redacted'>fool</span>");
  text = text.replace(/motherfucking/gi, "<span class='redacted'>bloody</span>");
  text = text.replace(/pee pee/gi, "<span class='redacted'>hotdog</span>");
  text = text.replace(/peepee/gi, "<span class='redacted'>hotdog</span>");
  text = text.replace(/penises/gi, "<span class='redacted'>brains</span>");
  text = text.replace(/pornography/gi, "<span class='redacted'>brainwashing</span>");
  text = text.replace(/sexy/gi, "<span class='redacted'>brilliant</span>");
  text = text.replace(/sexuality/gi, "<span class='redacted'>cooking skills</span>");
  text = text.replace(/shitter/gi, "<span class='redacted'>saddle</span>");
  text = text.replace(/shitting/gi, "<span class='redacted'>riding</span>");
  text = text.replace(/shitty/gi, "<span class='redacted'>phenomenal</span>");
  text = text.replace(/sodomized/gi, "<span class='redacted'>tickled</span>");
  text = text.replace(/take a piss/gi, "<span class='redacted'>throw up</span>");
  text = text.replace(/teenager/gi, "<span class='redacted'>rabbit</span>");
  text = text.replace(/teenaged/gi, "<span class='redacted'>frustrated</span>");
  text = text.replace(/virginity/gi, "<span class='redacted'>sense of humor</span>");

  text = text.replace(/porno/gi, "<span class='redacted'>drama</span>");
  text = text.replace(/sexual/gi, "<span class='redacted'>culinary</span>");
  text = text.replace(/teenage/gi, "<span class='redacted'>furry</span>");

  text = text.replace(/(\W)aids(\W)/gi, "<span class='redacted'>$1the plague$2</span>");
  text = text.replace(/anal/gi, "<span class='redacted'>professional</span>");
  text = text.replace(/anus/gi, "<span class='redacted'>ear</span>");
  text = text.replace(/(\W)ass(\W)/gi, "<span class='redacted'>$1ear$2</span>");
  text = text.replace(/(\W)ball(\W)/gi, "<span class='redacted'>$1knuckle$2</span>");
  text = text.replace(/bestiality/gi, "<span class='redacted'>calculus</span>");
  text = text.replace(/bitch/gi, "<span class='redacted'>lizzie</span>");
  text = text.replace(/blowjob/gi, "<span class='redacted'>foot massage</span>");
  text = text.replace(/boobs/gi, "<span class='redacted'>lovelies</span>");
  text = text.replace(/boobies/gi, "<span class='redacted'>lovelies</span>");
  text = text.replace(/boy/gi, "<span class='redacted'>frog</span>");
  //text = text.replace(/butt/gi, "<span class='redacted'>ear</span>");
  text = text.replace(/(\W)christ(\W)/gi, "<span class='redacted'>$1buddha$2</span>");
  text = text.replace(/clit/gi, "<span class='redacted'>tongue</span>");
  text = text.replace(/cock/gi, "<span class='redacted'>brain</span>");
  text = text.replace(/condom/gi, "<span class='redacted'>shoe</span>");
  text = text.replace(/(\W)cum(\W)/gi, "<span class='redacted'>$1spit$2</span>");
  text = text.replace(/cunt/gi, "<span class='redacted'>sweetness</span>");
  text = text.replace(/damn/gi, "<span class='redacted'>leaping lizards</span>");
  text = text.replace(/dick/gi, "<span class='redacted'>brain</span>");
  text = text.replace(/ejaculate/gi, "<span class='redacted'>spit</span>");
  text = text.replace(/erection/gi, "<span class='redacted'>amazing idea</span>");
  text = text.replace(/faggot/gi, "<span class='redacted'>idiot</span>");
  text = text.replace(/fag/gi, "<span class='redacted'>dog</span>");
  text = text.replace(/fuck/gi, "<span class='redacted'>smack</span>");
  text = text.replace(/gay/gi, "<span class='redacted'>American</span>");
  text = text.replace(/genital/gi, "<span class='redacted'>fatal</span>");
  text = text.replace(/girl/gi, "<span class='redacted'>lizard</span>");
  text = text.replace(/god/gi, "<span class='redacted'>zeus</span>");
  //text = text.replace(/hardcore/gi, "<span class='redacted'>********</span>");
  text = text.replace(/herpes/gi, "<span class='redacted'>chicken pox</span>");
  text = text.replace(/horny/gi, "<span class='redacted'>hungry</span>");
  text = text.replace(/incest/gi, "<span class='redacted'>coin-collecting</span>");
  text = text.replace(/intercourse/gi, "<span class='redacted'>lawn-mowing</span>");
  text = text.replace(/jesus/gi, "<span class='redacted'>ghandi</span>");
  text = text.replace(/lesbian/gi, "<span class='redacted'>hipster</span>");
  text = text.replace(/lesbo/gi, "<span class='redacted'>hipster</span>");
  text = text.replace(/naked/gi, "<span class='redacted'>ghetto</span>");
  text = text.replace(/nude/gi, "<span class='redacted'>ghetto</span>");
  text = text.replace(/masturbate/gi, "<span class='redacted'>check email</span>");
  text = text.replace(/masturbation/gi, "<span class='redacted'>climate change</span>");
  text = text.replace(/masturbating/gi, "<span class='redacted'>checking email</span>");
  text = text.replace(/masterbate/gi, "<span class='redacted'>check email</span>");
  text = text.replace(/masterbation/gi, "<span class='redacted'>climate change</span>");
  text = text.replace(/(\W)man(\W)/gi, "<span class='redacted'>$1sea-turtle$2</span>");
  text = text.replace(/(\W)men(\W)/gi, "<span class='redacted'>$1amphibians$2</span>");
  text = text.replace(/nigga/gi, "<span class='redacted'>programmer</span>");
  text = text.replace(/nigger/gi, "<span class='redacted'>programmer</span>");
  text = text.replace(/nipple/gi, "<span class='redacted'>nostril</span>");
  text = text.replace(/orgasm/gi, "<span class='redacted'>enlightenment</span>");
  text = text.replace(/penetration/gi, "<span class='redacted'>meditation</span>");
  text = text.replace(/penis/gi, "<span class='redacted'>brain</span>");
  text = text.replace(/(\W)pee(\W)/gi, "<span class='redacted'>$1vomit$2</span>");
  text = text.replace(/(\W)piss(\W)/gi, "<span class='redacted'>$1vomit$2</span>");
  text = text.replace(/porn/gi, "<span class='redacted'>culture</span>");
  text = text.replace(/prostitute/gi, "<span class='redacted'>slam dancer</span>");
  text = text.replace(/pubes/gi, "<span class='redacted'>fingernails</span>");
  text = text.replace(/pussies/gi, "<span class='redacted'>candies</span>");
  text = text.replace(/pussy/gi, "<span class='redacted'>candy</span>");
  text = text.replace(/racist/gi, "<span class='redacted'>facist</span>");
  text = text.replace(/(\W)rape(\W)/gi, "<span class='redacted'>$1worship$2</span>");
  text = text.replace(/raping/gi, "<span class='redacted'>worshiping</span>");
  text = text.replace(/semen/gi, "<span class='redacted'>paprika</span>");
  text = text.replace(/scrotum/gi, "<span class='redacted'>knuckle</span>");
  text = text.replace(/shit/gi, "<span class='redacted'>junk</span>");
  text = text.replace(/sex/gi, "<span class='redacted'>breakfast</span>");
  text = text.replace(/slut/gi, "<span class='redacted'>millionaire</span>");
  text = text.replace(/sodomy/gi, "<span class='redacted'>tickling</span>");
  text = text.replace(/sodomize/gi, "<span class='redacted'>tickle</span>");
  text = text.replace(/suck/gi, "<span class='redacted'>spank</span>");
  text = text.replace(/sucker/gi, "<span class='redacted'>spanker</span>");
  text = text.replace(/teen/gi, "<span class='redacted'>rabbit</span>");
  text = text.replace(/(\W)tit(\W)/gi, "<span class='redacted'>$1lovely$2</span>");
  text = text.replace(/tits/gi, "<span class='redacted'>lovelies</span>");
  //text = text.replace(/titties/gi, "<span class='redacted'>lovelies</span>");
  //text = text.replace(/tities/gi, "<span class='redacted'>lovelies</span>");
  text = text.replace(/turd/gi, "<span class='redacted'>bagel</span>");
  text = text.replace(/twat/gi, "<span class='redacted'>sweetness</span>");
  text = text.replace(/vibrator/gi, "<span class='redacted'>air-conditioner</span>");
  text = text.replace(/vagina/gi, "<span class='redacted'>scanner</span>");
  text = text.replace(/virgin/gi, "<span class='redacted'>baby</span>");
  text = text.replace(/vulva/gi, "<span class='redacted'>mouth</span>");
  text = text.replace(/whore/gi, "<span class='redacted'>mechanic</span>");
  text = text.replace(/woman/gi, "<span class='redacted'>reptile</span>");
  text = text.replace(/women/gi, "<span class='redacted'>reptiles</span>");

  //text = text.replace(/([\S]{16})/g, "$1 ");
  text = text.replace(/([\S]{64})/g, "$1 ");

  return text;
}
