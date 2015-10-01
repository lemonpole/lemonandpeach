# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # general config
  config.vm.box = "ubuntu/trusty32"
  config.vm.network :forwarded_port, guest: 80, host: 8080
  config.vm.network :private_network, ip: '192.168.42.43'

  # setup hostmanager
  config.hostmanager.enabled = true
  config.hostmanager.manage_host = true
  config.hostmanager.ignore_private_ip = false
  config.hostmanager.include_offline = false
  config.hostmanager.aliases = %w(lemonandpeach.us api.lemonandpeach.us)

  # allows running commands globally in shell for installed composer libraries
  config.vm.provision :shell, path: "files/scripts/setup.sh"

  # setup puppet
  config.vm.provision :puppet do |puppet|
    puppet.manifests_path = "puppet/manifests"
    puppet.module_path = "puppet/modules"
    puppet.manifest_file  = "init.pp"
  end
end
