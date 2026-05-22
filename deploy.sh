#run git pull
git pull

npm install -g pnpm

#run git pull
pnpm install

#run npm build
pnpm build

#run start pm2
pm2 restart ecosystem.config.js --watch

#clear frontend cache
curl -X POST -i -H "x-nuxt-multi-cache-token: O5ilxqx5k1ZzFMjEVr" http://127.0.0.1:3000/__nuxt_multi_cache/purge/all

#kill current process
fuser -k 3000/tcp