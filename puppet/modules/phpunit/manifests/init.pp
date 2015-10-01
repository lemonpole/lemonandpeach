class phpunit::install{
  exec { "composer install phpunit":
    command => 'composer global require "phpunit/phpunit=4.4.*"',
    environment => ["COMPOSER_HOME=/usr/local/bin"],
    require => Exec['install composer']
  }
}
