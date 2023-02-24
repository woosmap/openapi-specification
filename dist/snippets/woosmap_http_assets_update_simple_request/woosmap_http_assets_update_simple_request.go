// [START woosmap_http_assets_update_simple_request]
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.woosmap.com/stores?private_key=YOUR_PRIVATE_API_KEY"
  method := "PUT"

  payload := strings.NewReader(`{
  "stores": [
    {
      "store_id": "store_123",
      "name": "My amazing store",
      "location": {
        "lat": 43.61,
        "lng": 3.88
      }
    }
  ]
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("content-type", "application/json")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
// [END woosmap_http_assets_update_simple_request]