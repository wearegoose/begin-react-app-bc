@app
river-wcd

@static
folder build

@http
get /api
get /goose
get /bigcommerce-load
get /bigcommerce-uninstall
get /bigcommerce_auth

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
