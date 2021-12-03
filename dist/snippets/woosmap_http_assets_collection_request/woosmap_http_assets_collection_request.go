// [START woosmap_http_assets_collection_request]
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.woosmap.com/stores?private_key=YOUR_PRIVATE_API_KEY"
  method := "POST"

  payload := strings.NewReader(`{
  "stores": [
    {
      "types": [
        "drive",
        "click_and_collect"
      ],
      "tags": [
        "wifi",
        "covered_parking"
      ],
      "location": {
        "lat": 42.6251184,
        "lng": 2.4270975
      },
      "storeId": "STORE_ID_123456",
      "name": "My Cool Store",
      "address": {
        "lines": [
          "Building Centre",
          "26 Store Street"
        ],
        "countryCode": "UK",
        "city": "London",
        "zipcode": "WC1E 7BT"
      },
      "contact": {
        "website": "https://www.woosmap.com",
        "phone": "+44 20 7693 4000",
        "email": "contact@woosmap.com"
      },
      "userProperties": {
        "some_user_properties": "associated user value"
      },
      "openingHours": {
        "timezone": "Europe/London",
        "usual": {
          "1": [],
          "default": [
            {
              "start": "08:30",
              "end": "22:00"
            }
          ]
        },
        "special": {
          "2015-02-07": [
            {
              "start": "08:00",
              "end": "23:00"
            }
          ],
          "2015-02-08": []
        }
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
// [END woosmap_http_assets_collection_request]