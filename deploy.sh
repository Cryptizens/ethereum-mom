# To use this rudimentary deployment script, you need to:
# - have aws-cli installed
# - have created the target bucket on S3
# - have created the IAM policy and user for full bucket access
# - have this profile referenced in your ~/.aws/credentials file
# - have retrieved your Cloudflare API key and resource ID


# aws s3 cp dist/ s3://ethereum.mom/dist --recursive --profile ethereum-mom --acl public-read
# aws s3 cp index.html s3://ethereum.mom/index.html --profile ethereum-mom --acl public-read


curl -X DELETE "https://api.cloudflare.com/client/v4/zones/be19a35553a946d7c188df13f876c4d8/purge_cache" \
     -H "X-Auth-Email: vanderstraeten.thomas@gmail.com" \
     -H "X-Auth-Key: " \
     -H "Content-Type: application/json" \
     --data '{"purge_everything":true}' | json_pp

# Command to get the zone id of the website to purge
# curl -X GET "https://api.cloudflare.com/client/v4/zones" \
#    -H "X-Auth-Email: vanderstraeten.thomas@gmail.com" \
#    -H "X-Auth-Key: " \
#    -H "Content-Type: application/json"
