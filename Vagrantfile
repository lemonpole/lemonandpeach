# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure( '2' ) do | config |
  # general config
  config.vm.box = "ubuntu/trusty64"
  config.vm.network :forwarded_port, guest: 3000, host: 3131
  config.vm.network :forwarded_port, guest: 27017, host: 27117
  config.vm.network :private_network, ip: '192.168.42.43'

  # setup hostmanager
  config.hostmanager.enabled = true
  config.hostmanager.manage_host = true
  config.hostmanager.ignore_private_ip = false
  config.hostmanager.include_offline = false
  config.hostmanager.aliases = %w( lemonandpeach.us )

  # setup puppet
  config.vm.provision :puppet do | puppet |
    puppet.manifests_path = "puppet/manifests"
    puppet.module_path = "puppet/modules"
    puppet.manifest_file  = "init.pp"
  end
end
