---
title: Docker all the things
description: Why didn't I did this earlier
---

Since a few weeks I am working with docker it seems to make more and more sense to me.

So about the server I recently installed it is now running docker-compose next to docker.
yes I like the configuration much more than typing all the commands again and again.

For my next trick I am going to dockerize my dev server which recently became a bot in a DDoS attack _sign..._

The idea behind it that every project will get its own docker-compose file for development
and that all the things will be managed in there so I don't need to build a dockerfile every time
I deploy something.

Also when one of the containers is doing something funky I can just kill, remove and restart the container
and all funky things are gone (yeey).

Soon to have another writeup about my findings with multiple different projects like
[WordPress](https://wordpress.org/), [Laravel](https://laravel.com) and others.
