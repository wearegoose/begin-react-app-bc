@app
river-wcd

@static
folder build

@http
get /api
get /goose
get /bigcommerce-auth
get /bigcommerce-load

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
