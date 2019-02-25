---
template: article
title: How to choose a Javascript framework
date: 2017-04-27T15:47:40.582Z
ingress: >-
  Everyone knows that the rate of which new Javascript frameworks are released is hectic, to say the least. For every deprecation, there’s a bunch new ones to take its place. When someone strikes gold on a new pattern that promises to change the world, there’s 20 new implementations released in a short amount of time. How to make sense of it all?
tags:
  - dev
  - libraries
  - advice
  - javascript
pinned: 0
---

Which one should you go with? Which one is a good time investment to learn? The open source community is brimming with solutions to all your problems, but decision paralysis is a real thing that hurts your productivity.

You will not find the name of a single Javascript library or framework in this blogpost, not a single “this is what you should use” recommendation. A new framework, library or pattern drops almost every day, killing the previous solution. If I would name something, this post would be dead within a year.

What you will find, however, is a handful of criteria that you can apply to a solution `(const solution = ["framework", "library", "pattern"])`.

I should also say that this is geared towards solutions for serious apps that are going into production. In other words, I want to help you be productive with real work. If you are just hacking around and trying stuff out; do try everything!

Without further ado, here’s how I choose what to use, learn and fanatically preach:

### How’s the community?

The biggest positive a library can have is an active community. I can forgive many other shortcomings if the community is bustling with life, since it provides documentation, tutorials and even live help.

A community also means that the solution has been acknowledged by many as A Good Thing. This can be compared to a peer-reviewed scientific paper as there are many smart brains looking at the code and using it in production.

Signs of a healthy community are the following:

    Many questions and answers on StackOverflow
    A treasure trove of blog posts about the thing
    A steady stream of issues (not all issues mean trouble) and pull requests on Github
    The maintainers actively close issues and merge pull requests
    An active chat room or channel

Another sign of a good library, that ties into this point about the community, is that people are passionate about it. Both positive and negative passion is good in this case, since negative writings are a sign of people caring enough to write about it. The critics also often provide their own solution, incorporating ideas through their own implementations. This validates the good ideas behind a solution and keeps the innovation going.

A solution can have the most beautiful code, the sweetest API and the most passionate maintainer, but if the community is not there, the value isn’t either. On the other hand, if you hear bad things that you agree with about a solution that is otherwise popular, you can decide to steer clear of it.

There is, after all, a reason behind the popularity.

### Who’s behind it?

Okay, this criteria isn’t that important, but it might pay off to take a look at the creator behind a solution. Is it someone with a good open source track record? Is the solution actively maintained? Is it a company who’s invested in open source technology and are able to put in serious manpower to support their library? Are they active on forums, Twitter and chat? You should ask yourself these questions.

If a company is behind it, and that company has a good track record of doing open source the right way, that solution will have a very long life. Most likely, the company is using the thing themselves and are constantly improving it with a big team. That’s a big positive in my book.

I by no means want to say that a lone developer is worse than a company, just that a company has more bandwidth to improve and support their project. Packages released by lone developers are often of superb quality and they seem to have zero problems with closing issues and improving on their solution.

Just have a quick stalk at the maintainers, is all I’m sayin’.

### Take a closer look at the repository

A commit says more than a thousand words. Wait… how did the saying go? The Github repository will of course often be your initial point of contact with a project, but don’t rush to npm install right away! Take a look at the date of the last commit. Was it this month? This year?? Don’t bother with old and/or unmaintained libraries, it is not worth your time. If the problem is common, you’ll find another solution.

Of course, if it is literally the only solution available that will scratch your itch, you can take the risk. Just beware of dragons and whatnot.

### Is there documentation?

For many, this is the only criteria. Good (and actually existing) documentation is extremely important to have when using a solution. Everyone hates writing it, but if it is not done, I suggest looking somewhere else. Sure, you could read through the code, but you have a deadline. Documentation makes everything so much smoother!

If the documentation is lacking, consider my first criteria about the community. A community can provide quality, if not a little scattered, documentation.

After reading through the documentation, you should have a clear picture of the exact problem the solution remedies, its approach and philosophy as well as clear steps to start using it. If not, turn to the community. If there’s no community… well, start looking for something else.

### Is it battle-tested and stable?

A new day, a new Javascript framework. Nothing is fully cooked on day one, so make sure what you choose is ready to go. A good sign of stability is that many are using it in production, and I don’t mean the early adopters. Look for blog posts from companies and smart people who write about their experiences.

However, do NOT look at the version number! Yes, hitting version one means that it is stable, but nothing stops it from being stable below 1. As long as the minor is high enough, chances are that the code is stable enough. Just be prepared to do some small rewrites if you’re using stuff below major version 1, as that means the API can change.

### Do you want to use it?

Well, do you? This is the Personal Preference criteria, so if you see something you disagree with… well, don’t use it! Everyone has their preferences, programming styles and idiosynchracies. For example, I will most probably close the tab if the package concerns styling, but is not written in my preferred preprocessor. Sorry! Same goes for packages not available on my favourite package manager. Sorry again, but I don’t use Bower!

### npm install

Okay, so you made your choice. You’re enjoying working with the solution and everyhing is just dandy. But then suddenly, you see The Next Great Thing on Hacker news! What then? Do you blindly jump into the sweet embrace of the lofty promises of a better development experience that will make your life perfect and solve all of the world’s problems?

No, you don’t. You check out the community, you read the documentation (hopefully) and you read a few tweets from the maintainer. After that, you make a decision.

If you still suffer from decision paralysis, that nagging fear that’s saying “I’m not using the best tool available”, try to just ignore everything. That’s actually what I’ve been doing. Make a choice that you are happy with and then simply unplug. Master the tool. Write blog posts. Use it everywhere (where appropriate). Help build the community! Then, say once a year, you can celebrate New Framework Day when you plug back in for a moment and see what has been released and maybe pick up something new.
