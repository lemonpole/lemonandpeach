class nodejs::install {
	package {[
		'nodejs',
		'npm',
		'nodejs-legacy'
	]:
		ensure => installed,
    require => Class[ 'apt::update' ]
	}

  exec { 'nodemon':
    command => 'npm install -g nodemon',
    require => Package[ 'npm' ]
  }
}
