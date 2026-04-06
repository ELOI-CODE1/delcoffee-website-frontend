# andasy.hcl app configuration file generated for delcoffee-rw on Sunday, 05-Apr-26 21:27:33 EET
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "delcoffee-rw"

app {

  env = {}

  port = 3000

  primary_region = "kgl"

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "delcoffee-rw"
  }

}
