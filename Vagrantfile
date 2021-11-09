# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"

  config.vm.provider "virtualbox" do |v|
    v.name = "aarch64_build_env"
    v.memory = 2048
    v.cpus = 2
  end

  config.vm.provision "shell", inline: <<-SHELL
    echo "deb-src http://archive.ubuntu.com/ubuntu bionic main restricted" | sudo tee -a /etc/apt/sources.list
    sudo apt update -y
    sudo apt upgrade -y
    sudo apt build-dep -y linux qemu
    sudo apt install -y systemd systemd-container build-essential ninja-build libncurses-dev libncursesw5-dev flex bison openssl libssl-dev dkms libelf-dev libudev-dev libpci-dev libiberty-dev autoconf git gcc-aarch64-linux-gnu qemu binfmt-support qemu-user-static
    git clone --depth 1 git://git.qemu.org/qemu.git
    cd qemu
    git submodule update --init --recursive
    mkdir build
    cd build
    ../configure \
      --disable-bsd-user \
      --disable-guest-agent \
      --disable-strip \
      --disable-werror \
      --disable-gcrypt \
      --disable-debug-info \
      --disable-debug-tcg \
      --disable-docs \
      --disable-tcg-interpreter \
      --enable-attr \
      --disable-brlapi \
      --disable-linux-aio \
      --disable-bzip2 \
      --disable-cap-ng \
      --disable-curl \
      --disable-fdt \
      --disable-glusterfs \
      --disable-gnutls \
      --disable-nettle \
      --disable-gtk \
      --disable-rdma \
      --disable-libiscsi \
      --disable-vnc-jpeg \
      --disable-kvm \
      --disable-lzo \
      --disable-curses \
      --disable-libnfs \
      --disable-numa \
      --disable-opengl \
      --disable-vnc-png \
      --disable-rbd \
      --disable-vnc-sasl \
      --disable-sdl \
      --disable-seccomp \
      --disable-smartcard \
      --disable-snappy \
      --disable-spice \
      --disable-libusb \
      --disable-usb-redir \
      --disable-vde \
      --disable-vhost-net \
      --disable-virglrenderer \
      --disable-virtfs \
      --disable-vnc \
      --disable-vte \
      --disable-xen \
      --disable-xen-pci-passthrough \
      --disable-xfsctl \
      --enable-linux-user \
      --disable-system \
      --disable-blobs \
      --disable-tools \
      --target-list=aarch64-linux-user \
      --static \
      --disable-pie
    make
    sudo cp aarch64-linux-user/qemu-aarch64 /usr/bin/qemu-aarch64-static
    wget https://raw.githubusercontent.com/Drewsif/PiShrink/master/pishrink.sh
    chmod +x pishrink.sh
    sudo mv pishrink.sh /usr/local/bin
  SHELL
end
