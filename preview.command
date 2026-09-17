#!/bin/bash
# Double-click this file to preview the site. Opening index.html directly does not
# work: the pages load /js, /css and /static from the site root, which needs a server.
cd "$(dirname "$0")"
PORT=3000
( sleep 2; open "http://localhost:$PORT" ) &
echo "Glimpse Qatar preview running at http://localhost:$PORT  (close this window to stop)"
npx --yes serve -l $PORT .
