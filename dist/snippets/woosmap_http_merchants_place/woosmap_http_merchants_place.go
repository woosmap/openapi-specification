// [START woosmap_http_merchants_place]
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.woosmap.com/merchants/place?private_key=YOUR_PRIVATE_API_KEY"
  method := "POST"

  payload := strings.NewReader(`{
  "merchants": [
    {
      "dirty_name": "MCDO UK 2231 EP",
      "country": "GB",
      "merchant_id": "234482729011"
    },
    {
      "dirty_name": "Zara Fashion Retail, S.A.",
      "country": "IT",
      "merchant_id": "*44532UY2T33219"
    },
    {
      "dirty_name": "CARREFOUR CITY 3112846",
      "country": "FR",
      "merchant_id": "9651781125"
    },
    {
      "dirty_name": "ITUNES.COM/BILL",
      "country": "IE",
      "merchant_id": "2070070200925"
    },
    {
      "dirty_name": "Pepa SL Gracia",
      "country": "ES",
      "merchant_id": "34J21189"
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
// [END woosmap_http_merchants_place]