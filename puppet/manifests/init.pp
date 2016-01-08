Exec {
  path => [ "/bin/", "/sbin/" , "/usr/bin/", "/usr/sbin/", "/usr/local/bin", "/usr/local/sbin" ]
}

class { 'git::install': }
class { 'nodejs::install': }
class { 'mongodb::install': }
