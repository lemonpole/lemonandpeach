class git::install {
  package { 'git':
    ensure => present,
    require => Class[ 'apt::update' ]
  }
}
