---
title: My new server
description: Time for something new
topics: ['server', 'docker']
---

## After some time it is time for renewal. This time it my personal server that is now being renewed.

---

In my previous setup I had a nice little small server (Synology DS112+) but because I wanted more and more over the years it gave in to the wieght I had placed on it.

So out with the old an in with the new, enter my new Dell PowerEdge T310.
I know, the time of introduction of this server is already 7 years ago, but will do just fine with linux installed.

### The idea for this new server

This time instead of installing everything on the system itself I decided it was time to learn about Docker.
What draw me most was the idea that I don't have install every single package (including dependencies) on my own system but only start a container and that is it.

So to mimic (and improve) the functionality I had on my previous server I set out to find the packages I wanted, the following list came up:

-   Emby (Media server ala plex)
-   Radarr (Automatic movie downloader)
-   Sonarr (Automatic serie downloader)
-   Sabnzbd (NZB downloader)
-   Transmission (Torrent downloader)
-   OpenVPN
-   Samba
-   Duplicati (Backup system)

After configuring the containers with docker-compose it was just a matter of matter of minutes to get the entire system up and running.

And thusfar I haven't had a reason to use anything else.

### The future of this server

In the future I want to have some kind of home automation system like openHAB or Domoticz as well as something like Jenkins to test my own applications.

I will write a blog post after learning a lot more about docker ;)
