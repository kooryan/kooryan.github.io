---
title: "On Poker Theory and +EV strategies"
date: 2025-01-02
lastmod: 2025-01-02
# aliases: 
#     - /courses/course2/slides4.pdf
#     - /courses/course2/slides1.pdf
#     - /courses/course2/slides3.pdf
#     - /courses/course2/slides2.pdf
#     - /courses/course2/notes3.pdf
#     - /courses/course2/notes4.pdf
#     - /courses/course2/ps3.pdf
#     - /courses/course2/ps4.pdf
#     - /courses/course1/quiz1.pdf
#     - /courses/course1/quiz2.pdf
#     - /courses/course2/quiz3.pdf
#     - /courses/course2/quiz4.pdf
#     - /courses/course1/ps1.pdf
tags: ["Gambling", "Probability"]
author: "Ryan Koo"
description: "My thoughts on a mathematical perspective into poker" 
summary: "My thoughts on the probabilistic perspective of how to hedge favorable probabilities in uncertain situations for Texas Hold'em Poker to make quick cash." 
# cover:
#     image: "course1.png"
#     alt: "Villa of Reduced Circumstances"
#     relative: false
# editPost:
#     URL: "https://github.com/pmichaillat/hugo-website"
#     Text: "Course portal"
showToc: true
disableAnchoredHeadings: false

---

## Introduction 

I'm just publicly rambling my thoughts on my quick scan of Bill Chen's "The Mathematics of Poker" and how we can realize uncertain situations into scenarios that play favorably for us. 

+ What are Pot-Odds
+ What is equity 
+ The elementary relationship between pot-odds, equity, and betting strategy

## What are Pot-Odds

ecall EV as the definition of the sum of probabilities $\times$ outcomes. Formally in the discrete world,

$$
E[X] = \sum_i x_iP(x_i)
$$

Furthermore recall linearity of expectations. We digress and first discuss about how we can represent a “distribution” of a hand. 

**Consider** the hypothetical scenario where we play against  a tight player raise and we know from our experience that he raises if and only if he holds aces, kings, queens, or ace-king, we might represent his distribution of hands as:

$$
H = \left \\{ AA, KK, QQ, AKs, AKo \right \\}
$$

Now, suppose we are discussing a situation where two players A and B have hands taken from the following distributions:

$$
A = \{ AA, KK, QQ, JJ, AKo, AKs\}
\\ B = \{AA, KK, QQ\} 
$$

Then we have the following definitions (Chen represents the expectation in an unorthodox manner as \<X\> but we’ll continue representing them in the traditional manner):

| $$E[A, B]$$ | the expectation for playing the distribution A against the distribution B |
| --- | --- |
| $$E[A, AA \| B]$$ | the expectation for playing the distribution A against the hand AA given from the distribution B. |
| $$E[AA\|A, AA\|B]$$ | the expectation for playing AA from A against AA from B. |

As such, then by the definition of expectations and the linearity of it, we can directly compute the expectation given the distributions of $A$ and $B$ as

$$
E[A, B] = p(AA)E[A, AA|B] + p(KK)E[A, AA|B] +p(QQ)E[A, QQ|B] + ...
$$

Naturally, in poker, we want to employ a strategy that maximizes our expected value (EV), which is common sense.

Now under a Bayes lens, perhaps, we have some a priori information. From statistically significant number of hands played, the highest win rates even sits at around 3 to 4 big bets won per 100 hands. From this, from any random person selected in this world, we want to be able to estimate his probability distribution. If we can make correct assumptions of an apriori distirbution, we can better estimate all other parameters based on observed evidence. 

**Bayes Theorem**

Recall the basic definition of probability

$$
P(A \cap B) = P(A) P(B|A)
$$

From this, we can directly retrieve Bayes formula to retrieve the information for the probability of event B given event A

$$
P(B|A) = \frac{P(A|B)P(B)}{\sum_{i=1}^nP(A|B_i)P(B_i)}
$$

Although a very simple principle, we can exploitatively utilize this formulation constantly through play (especially in exploitative play covered in part II) 

> There are countless ways in which Bayesian inference can be used; in fact, many players employ this process unconsciously all the time. Consider a situation in a tournament when a player is at a table that breaks very early on. He is moved to a new table where the player on his right has already amassed a stack seven times as large as the starting stacks, while most of the other players in the tournament are still near their starting stacks. Most players would conclude that two scenarios are likely: the player with the huge stack is either an extremely loose and aggressive player or he happens to simply be an ordinary player who got extremely lucky. The natural inclination to believe that he is more likely to be loose and aggressive than very lucky is a direct consequence of Bayes' theorem, whether the player from the broken table is aware of this concept or not (Chen et al)
> 

**Consider** the scenario from all observational data (which might include stereotyping the player's ethnicity, gender, manner, wardrobe, personal appearance, and so on) that we conclude that he is likely 10% a “maniac player” who will raise 80% of his hands from the cutoff and 90% likely that he is a tighter player who will raise 10% of his hands.  On the first hand he plays, he raises from the cutoff. (Assume there is no posting.) Now what is the probability- that he is a maniac?

Directly applying Bayesian inference we can conclude that:

$$
A = \text{event that opponent raises on the cutoff}
$$
$$
B = \text{maniac player}
$$
$$
P(B | A) = \frac{P(A | B)P(B)}{P(A|B)P(B) + P(A|B^c)P(B^c)}
$$

Then just plugging in all the information we have

$$
P(A|B) = 0.8
\\ P(B) = 0.1
\\ P(B^c) = 0.9
\\ P(A | B^c) = 0.1
$$
$$
P(B|A ) = \frac{(0.8)(0.1)}{(0.8)(0.1) + (0.1)(0.9)} = 0.471
$$

One tendency among players is to delay characterizing and adjusting to a player's play until gaining a little more information, by observing some hands or the like. But this view is overly passive in our view; maximizing EV means taking advantage of all the information we have at our disposal and not necessarily waiting for confirmation that the information is reliable before trying to take advantage of it. The error that these players are making is that they \- do not realize the power of the information they have gained. It is worth noting that many players, even players who do not play well often make this adjustment, or a similar one, intuitively. But beware! This adjustment is open to exploitation by players who will sit down in a game and play very differently from their usual style in an attempt to induce significant adjustments by players in the game.


## Pot-Odds, Equity, and Betting Strategy 

In the context of poker, we define ‘expectation’  "expectation of a hand" here to mean the expectation of a hand played with a given strategy against an opposing strategy. Likewise, the expectation of a hand distribution against a strategy is the weighted average expectation of the hands in that distribution against the opposing strategy, and so on

Thus, naturally, we want to maximize our expectation against the opponent’s strategy, the goal of **exploitative play**.  If our opponent plays a strategy S, we define the maximally exploitive strategy to be the strategy (or one of the strategies) that has the highest expectation against S. When playing exploitively, it is often our goal to find the strategy that is maximally exploitive and then employ it. By doing this, we maximize our expectation. We begin with a simple toy game to illustrate the process of finding this strategy.

**Example 4.1** Player A either has the nuts 20% of the time, or a dead hand (bluff) 80% of the time. 

The fundamental confrontation between players in poker is the made hand and the draw hand. We see within no limit poker, draws are lucratively able to exploit this type of situation through means of **semi-bluffs.** 

**Example 4.2**  The game is 30\-60 hold’em. Player A has A♣ A♦. Player B has 9♥ 8♥. The board is K♥ 7♣ 3♠ 2♥. The pot is $400. Player A is first. How should the action go if both players know the full situation?

You can likely guess that the action goes A bets - B calls. It is valuable, however, to examine the
underlying mathematics because it provides an excellent introduction to this type of analysis and
to the concept of **pot odds.** We can calculate expectations of player A or B winning based off of their next immediate action. For example,

$$
E[A \text{ wins}, \text{checks}] = p(A \text{ wins}) \times (\text{pot size}) = (35/44) \times 400= \\$318.18
$$

Naturally from logical sequence, if A checks, B will check; if B were to bet he would immediately lose 3/5 expected value, since their probability of winning the pot is only $\frac{1}{5}$. Now, consider B’s options between calling and checking. Again, B will never raise in this situation as he loses EV. Thus we have:

$$
E[B \text{ wins}, calls] = p(\text{B wins}) \times (\text{new pot size}) - (\text{cost of call})
$$
$$
= (9/44)(400 +60 + 60) - 60 = \\$46.36
$$
$$
E[B, folds] = 0
$$

We can immediately see from this result that since B’s EV of calling is higher than their EV of folding, we would want to bet. 

> Comparing A's equity from betting to A's equity from checking, we see that A gains a more than $35 by betting. This result indicates the main principle of made hand vs. confrontations: **(1) In made hand vs. draw situations, the made hand usually bets.**
> 

There are some expectations to this obviously, but the main point we found our equity to be greater than the equity from folding. Thus, we find find the range of bets that B would continue to call given some $x$   that is the probability of B winning the hand:

$$
P(B)(\text{new pot size}) - (\text{cost of call}) > 0
$$
$$
520 \times P(B) - 60 >0 
$$
$$
P(B) > 3/26
$$

Notice the RHS probability. This is our **pot-odds.**  This leads us to the second principle of hand vs. draw situations.

> In made hand vs. draw situations, **the draw usually calls if it has positive equity in the after
calling and subtracting the amount of the call.**
> 

Pot-odds calculations are a useful and practical way of approximating and some calculating outright whether it's correct to call with a **draw**, particularly at the table.