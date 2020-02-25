@app
river-wcd

@static
folder build

@http
get /api
get /goose

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
