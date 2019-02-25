---
template: article
title: Switching to Linux
date: 2018-09-17T15:47:40.582Z
media_image: /img/switching_to_linux.jpg
ingress: >-
  At the end of July 2018 Apple released their mid-2018 model MacBook Pro lineup. I went freelance in March, and having worked on an aging 2014 MacBook Pro that I bought with me from my previous gig until then, I was ready to make my first big purchase as an independent developer: my very own MacBook Pro. I was even prepared to go all in on the top of the line model, 32gb of RAM being the spec item I was waiting for the most.
tags:
  - dev
  - life
  - linux
  - macbook
pinned: 0
---

Then the new models were released. It wasn’t an instant dislike — it built up gradually as I was preparing myself mentally to throw down many thousands of Euros on a laptop. I could probably get over the keyboard. I wasn’t going to do 3D rendering on it, so maybe I wouldn’t throttle the processor too much. It’s no problem to carry around a dongle or two, right? I mean, what other alternatives are there for professional web development?

And then it hit me that I could just buy a powerful Windows machine and install Linux on it! I don’t really need macOS for my work, I just need not Windows. If you don’t know, Windows isn’t really optimal for developing non-Microsoft apps on simply because macOS (or Unix) is the de facto standard. Most tools, tutorials and packages are made for Mac developers. Sometimes they have Windows versions available, but often not. If you use Unix, you can just paste in commands from StackOverflow (as long as you know what you’re doing). NPM had weird problems with Windows in the past. I had a colleague that developed on Windows, and sometimes stuff just wouldn’t work for him. If we collaborated on a project, he usually had to jump through a few hoops to get the project to build. The list goes on!

Sure, you can develop on Windows and make it work for you (yes I know about the Linux subsystem), but going with the standard is the path of least resistance. That said, Linux comes with its own challenges, some of which I will lay out in this blog post.

### The machine

I ended up purchasing an Asus Zephyrus M, with the spectacular Intel i7 8750H processor (same as what the new MacBook Pro has) and 16gb of RAM. It also has an NVIDIA GTX 1070 (desktop class) graphics card that absolutely owns most games. All in a thin and light laptop, not much thicker than your fancy new MacBook Pro.

I fully realize I said “32gb of RAM is the most important spec item for me” just a few paragraphs up, but what non-MacBooks have going for them is that they are upgradeable. Sure enough, I popped open the bottom of the Zephyrus and was greeted with an empty RAM slot. 16 gb is enough to get going, and I have the freedom to upgrade if I need to. With MacBooks, what you get is what you get. No changesies.

The Zephyrus also came with a 1 tb hard drive, in addition to the main 512 gb system SSD. The spinny one had to go, so I replaced it with another 512 gb SSD. That’s where my chosen Linux distro was going to be installed!

I ended up with a crazy-powerful computer that can boot into both Windows for gaming and Linux for programming. All for way less than what I planned to spend on a MacBook Pro!

### The distro

I’ve had my eyes on a distribution called Deepin for a while, even before this whole project. It’s reminiscent of macOS and aims to be simple to use. After trying both Linux Mint and Elemental OS, Deepin is what I ended up going with. But with a twist!

To strike the right balance of nerdiness and having a system that actually works well in a professional setting and isn’t too hard for a total Linux n00b to set up, I dismissed the easy end of the distribution spectrum, Ubuntu or Mint (which actually didn’t work perfectly when I tested it), as well as the hardest end, Arch and Gentoo, and landed on Manjaro. There’s lots to like in Arch — it’s widely used and very well supported in addition to having a rolling release schedule (which just means lots of easy updates), but setting up an Arch system takes some elbow grease. Manjaro is also a very popular distro and is based on Arch, so I get all the good parts of Arch plus some user friendliness from the good folks that contribute to Manjaro. Plus, there’s a community release that switches Manjaro’s default desktop environment to Deepin, which I had already decided on.

So Manjaro Deepin is what I am running now!

### How its going

Uh… to be honest, 3/5 stars. I like it, I don’t regret it, but it’s not the best experience. The coolness (ie nerdiness) factor contributes a lot to that score, as running an OS that’s completely open source feels great. Most things work, but I have newfound respect for how much work has gone into making commercial, mainstream operating systems like Windows and macOS work consistently and in an user-friendly manner.

First things first, the good parts. What I said in the introduction about Unix being the de facto standard is absolutely true, developing web apps works great. Every tool I am used to and liked from my Mac times was just a pacman -S [tool] or yarn add away (save for Sequel Pro 😦). I like the command line, but Manjaro also provides a few UI’s for switching kernels (more coolness points). Deepin looks gorgeous and also contains its own share of excellent apps and utilities.

What is not-so-excellent is having to reconfigure the monitor layout each time I connect a monitor. Seriously, does Microsoft and Apple have a patent on this? I often switch between my home monitor and the one at the office (the same ones each day), would it be impossible to remember which monitor is in which layout like the big boys do? My home monitor is always mirrored when I plug it in, and the office monitor is on the wrong end of the workspace. Oh well.

Speaking of monitors, my 4K screen was unusable with Linux. The problem was not that Linux doesn’t support 4K — it does. The problem was also not that Linux doesn’t support HiDPI (retina) modes — it does that too, although not perfectly. HiDPI is crucial with a 4K monitor as everything is way too small on a 1:1 4K resolution. The Zephyrus has a 1080p screen, which is good, but having that in a non-HiDPI mode and the 4K screen in a HiDPI mode proved impossible. I switched to a 27 inch 1440p monitor which works fantastically and is a pleasure to look at.

At one point I tried to update the graphics card driver and was stuck with a machine that didn’t want to load the OS for a day and a half. Debugging that wasn’t fun at all, and I’m still not sure how I managed to fix it. Even with a working graphics driver I’m getting horrible screen tearing on the 1440p display. It works, well even, but not perfectly. I’m not touching that driver again though…

More miscellaneous nitpicks:

- Sometimes the WiFi is just gone, as in the driver hasn’t loaded and the device is just not picked up by the OS gone. I have to reboot to get it back, and even that doesn’t always work. (update 2019-02-25: this seems to be fixed now! Hooray!)
- The keyboard backlight on the Zephyrus is a proprietary one, and Linux does not support it. It will stay on in the setting I have it in when booted to Windows.
- Sometimes it doesn’t properly wake up from sleep and I have to reset it with the power button.
- Also, I’ve had to disable all ways to wake it from sleep except for the power button, as it would just wake up immediately after putting it to sleep for some random reason.
- Running a dark theme on Deepin reveals that most developers don’t bother to set backgrounds on their input elements. The default background is taken from the desktop theme on Linux, and with a dark theme it will be dark. So be sure to set an explicit light background on your inputs if the text color is dark. You never know what kind of weird OS setups your visitors are running!

That’s why it’s a 3/5 experience. I can develop on it and it generally works well, but it lacks the polish and user-friendliness of mainstream OS’s. I guess I get what I paid for.

### The verdict

If you have developed antipathies towards Apple due to their disregard of the needs of professional developers in favor of shaving off millimeters from their MacBook Pro design and want to continue working with Unix, I would recommend giving Linux a try. Just be prepared that the experience is not going to be as polished, and some of your time will be going towards fixing random things that randomly break. You will of course also not be able to develop React Native for iOS (looking for a workaround atm) or run any Adobe software like Photoshop.

As to why I didn’t go the Hackintosh route: been there done that. It’s certainly doable, but it would be even more challenging than running Linux, especially on a laptop.

Hopefully I have given some insight into what it’s like to use Linux for professional web development, and if you have any questions, feel free to drop them below or shoot them to me at [@ddunderfelt](https://twitter.com/ddunderfelt) on Twitter.

Until next time!
