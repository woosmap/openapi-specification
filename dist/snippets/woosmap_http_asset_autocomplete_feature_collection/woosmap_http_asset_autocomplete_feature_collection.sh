# [START woosmap_http_asset_autocomplete_feature_collection]
curl -L -X GET 'https://api.woosmap.com/stores/autocomplete/?lat=51.50976&lng=-0.145276&radius=50000&query=localized%3Astreet&key=YOUR_PUBLIC_API_KEY' \
-H 'Referer: http://localhost'
# [END woosmap_http_asset_autocomplete_feature_collection]