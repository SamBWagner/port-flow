---
layout: "../../layouts/BlogLayout.astro"
title: "Keeping Your Software Project Maintainable"
description:
  "A guide to managing conceptual complexity in software projects and keeping
  them maintainable over time."
publishDate: "February 18th, 2026"
---

Writing great software is hard. Building systems that solve real problems is
hard. So, when you're embarking on any software journey, be it personal or
professional, there is a concept called conceptual complexity. Put simply, it's
the idea that the more "concepts" you introduce into a system, the more complex
it gets. So, when you're building great software, there are a few principles
that you can abide by that will make your, and your colleagues', lives easier.

## Complexity Bad

This is a statement/idea taken from a fantastic article made by
[Carson Gross](https://bigsky.software/cv/) called
[The Grug Brained Developer](https://grugbrain.dev). The point is simple and one
to be adhered to as best you can. I won't reiterate the point as the article is
a hilarious and insightful read.

## Complexity is Necessary

So, you might wonder why I'm saying this considering the previous point. But,
the idea of building software that doesn't have some complexity is laughable.
Eventually, you'll need to solve some problems, and with those solutions, you'll
opt in to some forms of complexity. It's just that you ought to always remember
that complexity is a necessary evil, not one to throw around willy-nilly. So how
do you manage complexity? How do you stop yourself from going down "the dark
path"?

## Concept Tracking

In the midst of any project, you'll have a moment where you realise that there
are too many "things" going on. You started out with a simple front-end +
back-end + database. But, at some point, someone added payments, someone added
serverless functions, someone made another API to handle something, you added
caching, queues, containers, etc, etc. At some point, all of these different
"things" or "concepts" start to generate their own weight and the project starts
to gain this ball-and-chain style effect.

Let's come up with a way to inspect this problem. Whenever you add anything,
this could be a piece of infrastructure, a code-architecture, a service, a
function, the scale or scope of the thing doesn't matter. What matters is "Does
someone trying to maintain this need to learn something?" If the answer is yes,
then you've added a concept to the project. This isn't a bad thing. But, it does
mean that you have increased the complexity of the project. What you want to do,
is to minimise this as much as possible.

A key thing of note here is that getting rid of concepts isn't a free process.
And, sometimes untenable. DHH has an article which covers this very well:
[Conceptual compression is lossy, and loss hurts](https://world.hey.com/dhh/conceptual-compression-is-lossy-and-loss-hurts-c62d027a).

## What Should You Do?

I'd recommend going to your current software projects and doing a real, honest
scan through and tracking how many individual concepts are inside it. In
different projects, you're going to just have an innately higher or lower
concept count. But, the point is not to give value to an individual number. If
you happen to count 100 concepts in your project, that doesn't mean that your
project is "overly complex". However, what it's useful for, is to now be aware
that a project that's similar to yours, might have greater or lower conceptual
complexity. That's something valuable to see.

In your life growing as a Software Engineer, your goal is to learn how to drive
down that number project-to-project and to opt into those concepts, only when
the cost is outweighed by the benefits.

So, the next time you finish off a personal project, or some part of a project
at work. Stop, and count up all the different concepts you've needed to use to
make it all work. Doing this will help you continually inspect and grow.
