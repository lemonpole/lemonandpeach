class laravel::install {
  exec { "composer install laravel":
    command => 'composer global require "laravel/installer=~1.1"',
    environment => ["COMPOSER_HOME=/usr/local/bin"],
    require => Exec['install composer']
  }
}
