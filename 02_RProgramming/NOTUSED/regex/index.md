---
title       : Regular Expressions
subtitle    : Computing for Data Analysis
author      : Roger Peng, Associate Professor
job         : Johns Hopkins Bloomberg School of Public Health
logo        : bloomberg_shield.png
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow      # 
url:
  lib: ../../libraries
  assets: ../../assets
widgets     : [mathjax]            # {mathjax, quiz, bootstrap}
mode        : selfcontained # {standalone, draft}
---

## Regular expressions

- Regular expressions can be thought of as a combination of literals and _metacharacters_
- To draw an analogy with natural language, think of literal text forming the words of this language, and the metacharacters defining its grammar
- Regular expressions have a rich set of metacharacters

---

## Literals

Simplest pattern consists only of literals. The literal “nuclear” would match to the following lines:

```markdown
Ooh. I just learned that to keep myself alive after a
nuclear blast! All I have to do is milk some rats
then drink the milk. Aweosme. :}

Laozi says nuclear weapons are mas macho

Chaos in a country that has nuclear weapons -- not good.

my nephew is trying to teach me nuclear physics, or
possibly just trying to show me how smart he is
so I’ll be proud of him [which I am].

lol if you ever say "nuclear" people immediately think
DEATH by radiation LOL
```

---

## Literals

The literal “Obama” would match to the following lines

```markdown
Politics r dum. Not 2 long ago Clinton was sayin Obama
was crap n now she sez vote 4 him n unite? WTF?
Screw em both + Mcain. Go Ron Paul!

Clinton conceeds to Obama but will her followers listen??

Are we sure Chelsea didn’t vote for Obama?

thinking ... Michelle Obama is terrific!

jetlag..no sleep...early mornig to starbux..Ms. Obama
was moving
```

---

## Regular Expressions

- Simplest pattern consists only of literals; a match occurs if the sequence of literals occurs anywhere in the text being tested

- What if we only want the word “Obama”? or sentences that end in the word “Clinton”, or “clinton” or “clinto”?

---

## Regular Expressions

We need a way to express 
- whitespace word boundaries 
- sets of literals
- the beginning and end of a line 
- alternatives (“war” or “peace”)
Metacharacters to the rescue!

---

## Metacharacters

Some metacharacters represent the start of a line

```markdown
^i think
```

will match the lines

```markdown
i think we all rule for participating
i think i have been outed
i think this will be quite fun actually
i think i need to go to work
i think i first saw zombo in 1999.
```

---

## Metacharacters

$ represents the end of a line

```markdown
morning$
```

will match the lines

```markdown
well they had something this morning
then had to catch a tram home in the morning
dog obedience school in the morning
and yes happy birthday i forgot to say it earlier this morning
I walked in the rain this morning
good morning
```

---

## Character Classes with []

We can list a set of characters we will accept at a given point in the match

```markdown
[Bb][Uu][Ss][Hh]
```

will match the lines

```markdown
The democrats are playing, "Name the worst thing about Bush!"
I smelled the desert creosote bush, brownies, BBQ chicken
BBQ and bushwalking at Molonglo Gorge
Bush TOLD you that North Korea is part of the Axis of Evil
I’m listening to Bush - Hurricane (Album Version)
```

---

## Character Classes with []

```markdown
^[Ii] am
```

will match

```markdown
i am so angry at my boyfriend i can’t even bear to
look at him

i am boycotting the apple store

I am twittering from iPhone

I am a very vengeful person when you ruin my sweetheart.

I am so over this. I need food. Mmmm bacon...
```

---

## Character Classes with []

Similarly, you can specify a range of letters [a-z] or [a-zA-Z]; notice that the order doesn’t matter

```markdown
^[0-9][a-zA-Z]
```

will match the lines

```markdown
7th inning stretch
2nd half soon to begin. OSU did just win something
3am - cant sleep - too hot still.. :(
5ft 7 sent from heaven
1st sign of starvagtion
```

---

## Character Classes with []

When used at the beginning of a character class, the “^” is also a metacharacter and indicates matching characters NOT in the indicated class

```markdown
[^?.]$
```

will match the lines

```markdown
i like basketballs
6 and 9
dont worry... we all die anyway!
Not in Baghdad
helicopter under water? hmmm
```

---

## More Metacharacters

“.” is used to refer to any character. So

```markdown
9.11
```

will match the lines

```markdown
its stupid the post 9-11 rules
if any 1 of us did 9/11 we would have been caught in days.
NetBios: scanning ip 203.169.114.66
Front Door 9:11:46 AM
Sings: 0118999881999119725...3 !
```

---

## More Metacharacters: |

This does not mean “pipe” in the context of regular expressions; instead it translates to “or”; we can use it to combine two expressions, the subexpressions being called alternatives

```markdown
flood|fire
```

will match the lines

```markdown
is firewire like usb on none macs?
the global flood makes sense within the context of the bible
yeah ive had the fire on tonight
... and the floods, hurricanes, killer heatwaves, rednecks, gun nuts, etc.
￼
```

---

## More Metacharacters: |

We can include any number of alternatives...

```markdown
flood|earthquake|hurricane|coldfire
```

will match the lines

```markdown
Not a whole lot of hurricanes in the Arctic.
We do have earthquakes nearly every day somewhere in our State
hurricanes swirl in the other direction
coldfire is STRAIGHT!
’cause we keep getting earthquakes
```

---

## More Metacharacters: |

The alternatives can be real expressions and not just literals

```markdown
^[Gg]ood|[Bb]ad
```

will match the lines

```markdown
good to hear some good knews from someone here
Good afternoon fellow american infidels!
good on you-what do you drive?
Katie... guess they had bad experiences...
my middle name is trouble, Miss Bad News
```

---

## More Metacharacters: ( and )

Subexpressions are often contained in parentheses to constrain the alternatives

```markdown
^([Gg]ood|[Bb]ad)
```

will match the lines

```markdown
bad habbit
bad coordination today
good, becuase there is nothing worse than a man in kinky underwear
Badcop, its because people want to use drugs
Good Monday Holiday
Good riddance to Limey
```

---

## More Metacharacters: ?

The question mark indicates that the indicated expression is optional

```markdown
[Gg]eorge( [Ww]\.)? [Bb]ush
```

will match the lines

```markdown
i bet i can spell better than you and george bush combined
BBC reported that President George W. Bush claimed God told him to invade I
a bird in the hand is worth two george bushes
```

---

## One thing to note...

In the following

```markdown
[Gg]eorge( [Ww]\.)? [Bb]ush
```

we wanted to match a “.” as a literal period; to do that, we had to “escape” the metacharacter, preceding it with a backslash In general, we have to do this for any metacharacter we want to include in our match

---

## More metacharacters: * and +

The * and + signs are metacharacters used to indicate repetition; * means “any number, including none, of the item” and + means “at least one of the item”

```markdown
(.*)
```

will match the lines

```markdown
anyone wanna chat? (24, m, germany)
hello, 20.m here... ( east area + drives + webcam )
(he means older men)
()
```

---

## More metacharacters: * and +

The * and + signs are metacharacters used to indicate repetition; * means “any number, including none, of the item” and + means “at least one of the item”

```markdown
[0-9]+ (.*)[0-9]+
```

will match the lines

```markdown
working as MP here 720 MP battallion, 42nd birgade
so say 2 or 3 years at colleage and 4 at uni makes us 23 when and if we fin
it went down on several occasions for like, 3 or 4 *days*
Mmmm its time 4 me 2 go 2 bed
```

---

## More metacharacters: { and }

{ and } are referred to as interval quantifiers; the let us specify the minimum and maximum number of matches of an expression

```markdown
[Bb]ush( +[^ ]+ +){1,5} debate
```

will match the lines

```markdown
Bush has historically won all major debates he’s done.
in my view, Bush doesn’t need these debates..
bush doesn’t need the debates? maybe you are right
That’s what Bush supporters are doing about the debate.
Felix, I don’t disagree that Bush was poorly prepared for the debate.
indeed, but still, Bush should have taken the debate more seriously.
Keep repeating that Bush smirked and scowled during the debate
```

---

## More metacharacters: and

- m,n means at least m but not more than n matches 
- m means exactly m matches
- m, means at least m matches

---

## More metacharacters: ( and ) revisited

- In most implementations of regular expressions, the parentheses not only limit the scope of alternatives divided by a “|”, but also can be used to “remember” text matched by the subexpression enclosed
- We refer to the matched text with \1, \2, etc.

---

## More metacharacters: ( and ) revisited

So the expression

```markdown
+([a-zA-Z]+) +\1 +
```

will match the lines

```markdown
time for bed, night night twitter!
blah blah blah blah
my tattoo is so so itchy today
i was standing all all alone against the world outside...
hi anybody anybody at home
estudiando css css css css.... que desastritooooo
```

---

## More metacharacters: ( and ) revisited

The * is “greedy” so it always matches the _longest_ possible string that satisfies the regular expression. So

```markdown
^s(.*)s
```

matches

```markdown
sitting at starbucks
setting up mysql and rails
studying stuff for the exams
spaghetti with marshmallows
stop fighting with crackers
sore shoulders, stupid ergonomics
```

---

## More metacharacters: ( and ) revisited

The greediness of * can be turned off with the ?, as in

```markdown
^s(.*?)s$
```

---

## Summary

- Regular expressions are used in many different languages; not unique to R.
- Regular expressions are composed of literals and metacharacters that represent sets or classes of characters/words
- Text processing via regular expressions is a very powerful way to extract data from “unfriendly” sources (not all data comes as a CSV file)
(Thanks to Mark Hansen for some material in this lecture.)
