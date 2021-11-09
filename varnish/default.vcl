vcl 4.0;

backend default {
  .host = "host.docker.internal:3333";
}

sub vcl_backend_response {
    if (bereq.url == "/") {
       set beresp.do_esi = true;
       set beresp.ttl = 4w;
    } elseif (bereq.url == "/esi") {
       set beresp.ttl = 0s;
    }
}

sub vcl_recv {
    if (req.method == "PURGE"){
       return (purge);
    }
}

sub vcl_purge {
    return (synth(200, "Purged"));
}

sub vcl_deliver {
  set resp.http.X-Powered-By = "Varnish";
}