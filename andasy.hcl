app_name = "delcoffee-rwanda"
app {
  env = {}
  port = 4000
  primary_region = "kgl"
  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }
  process {
    name = "delcoffee-rwanda"
  }
}