# Eurorack to AES67

![Concept](/assets/concept.svg?raw=true)

Turn your [Expert Sleepers ES-9](https://www.expert-sleepers.co.uk/es9.html) and [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) into a AES67/RAVENNA network audio interface.

## Install

1. Download the [latest release](https://github.com/elektrofon/eurorack-to-aes67/releases/latest).
2. Flash `eurorack-to-aes67-rpi4.img.zip` (no need to unzip) to a 4GB+ SD card using [balenaEtcher](https://www.balena.io/etcher/).
3. When the Raspberry PI has fully booted, you will find `Synth xxxxxxxx Source` in your AES67/RAVENNA device sink browsers.

The AES67 source and sink is set up to run at 48kHz sample rate in the L24 format with a 48 sample frame size.

## Building from source

#### Install prerequisites

1. Compatible Vagrant back-end provider ([Virtual Box](https://www.virtualbox.org/), [Hyper-V](https://en.wikipedia.org/wiki/Hyper-V) or [Docker](https://www.docker.io/))
2. [Vagrant](https://www.vagrantup.com/downloads)

#### Build

```bash
$ vagrant up && vagrant ssh -c "/vagrant/vagrant-build"
```
