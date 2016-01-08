class mongodb::install {
  apt::source { 'mongodb-org-3.0':
    location    => 'http://repo.mongodb.org/apt/ubuntu',
    release     => "trusty/mongodb-org/3.0",
    repos       => 'multiverse',
    key         => '7F0CEB10',
    key_server  => 'keyserver.ubuntu.com',
    include_src => false
  }

  package { 'mongodb-org':
    ensure => present,
    require => Apt::Source[ 'mongodb-org-3.0' ]
  }
}
