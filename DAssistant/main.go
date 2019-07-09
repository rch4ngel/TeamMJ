// Author: Mitzi Cubedo, John Nielsen
// Description: Web Server for Pepper Animal Game.
package main

import "net/http"

func main() {
	http.HandleFunc("/", HandleIndex)
	http.ListenAndServe(":8000", nil)
}

func HandleIndex(w http.ResponseWriter, r *http.Request) {

}

// Timer

// Score

