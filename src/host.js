/**
 * auto will auto-resolve a Docker Host based on the current environment.
 */
function auto(){
  let host = process.env.DOCKER_HOST || 'unix:///var/run/docker.sock';
  const isUnixSocket = (host.indexOf('unix') > -1);

  // add the trailing `:` if it's a unix socket
  if (isUnixSocket) {
    host += ":";
  }
  // backwards compatibility for unix format
  if (isUnixSocket && host.substring(0, 8) == "unix:///") {
    host = host.replace("unix://", "http://unix:")
  }
  return host;
}

export { auto };