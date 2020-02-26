@app
river-wcd

@static
folder build

@http
get /api
get /goose
get /bigcommerce-auth

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
